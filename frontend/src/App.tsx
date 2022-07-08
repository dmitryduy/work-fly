import { useForm } from "react-hook-form";


import TextInput from "./components/TextInput/TextInput";

const App = () => {
  const {control, handleSubmit, resetField} = useForm<{ f: string }>({mode: 'onChange', defaultValues: {f: ''}});

  return <div style={{width: 200, marginLeft: 40, marginTop: 50}}>
    <TextInput
      size='m'
      tooltip={'text'}
      label='Label'
      placeholder='Text'
      name='f'
      control={control}
      rules={{required: true, maxLength: 5}}
      errors={{ required: 'req', maxLength: 'max'}}
      resetField={() => resetField('f')}
    />
    <button onClick={handleSubmit(data => console.log(data), e => console.log(e))}>click</button>
  </div>;
};

export default App;