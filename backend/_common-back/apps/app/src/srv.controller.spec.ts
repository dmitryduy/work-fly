import { Test, TestingModule } from '@nestjs/testing';
import { SrvController } from './srv.controller';
import { SrvService } from './srv.service';

describe('SrvController', () => {
    let srvController: SrvController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [SrvController],
            providers: [SrvService],
        }).compile();

        srvController = app.get<SrvController>(SrvController);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(srvController.getHello()).toBe('Hello World!');
        });
    });
});
