import { Pool, PoolClient, PoolConfig } from 'pg';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const isDeadLockError = (e) => e?.code === '40P01' || e?.routine === 'DeadLockReport';

export class PgClient extends Pool {
    private _logger = new Logger(PgClient.name);
    private _client: PoolClient;

    async init() {
        this._client = await this.connect();
    }

    async row<T = unknown>(query: string): Promise<T | null> {
        const queryResult = await this.query(query);
        if (queryResult?.rows) {
            return queryResult.rows[0] ?? null;
        } else {
            throw new Error('Bad query. Empty result.');
        }
    }

    async rows<T = unknown>(query: string): Promise<Array<T>> {
        const queryResult = await this.query(query);
        if (queryResult?.rows) {
            return queryResult.rows ?? [];
        } else {
            throw new Error('Bad query. Empty result.');
        }
    }

    async fieldValue<T = unknown>(query: string, field: string): Promise<T | null> {
        return (await this.row<T>(query))?.[field] || null;
    }

    async close() {
        this._client.release();
        await this.end();
    }

    async executeQuery<T>(queryText: string, values: unknown[] = []): Promise<T[]> {
        this._logger.verbose(`Executing query: ${queryText} (${values})`);
        const result = await this.query<T>(queryText, values);
        this._logger.verbose(`Executed query, result size ${result.rows.length}`);
        return result.rows;
    }
}

export const PG_CONNECTOR_FACTORY = (configIdent: string) => ({
    provide: PgClient,
    useFactory: async (configService: ConfigService): Promise<PgClient> => {
        if (!process.env.DATABASE_URL) {
            Logger.error('PG connection URL empty', null, 'PG Connector factory');
            return;
        }
        const connectConfig: PoolConfig = configService.get(configIdent);
        const connect = new PgClient(connectConfig);
        await connect.connect().catch((error) => {
            Logger.error('PG connection error', error, 'PG Connector factory');
        });
        const dbURL = new URL(process.env.DATABASE_URL);
        Logger.verbose(`PG Connected at ${dbURL.host}${dbURL.pathname}`, 'PG_CONNECTOR factory');
        return connect || null;
    },
    inject: [ConfigService],
});
