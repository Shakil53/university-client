import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";


const Login = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: 'A-0002',
            Password: 'admin123',
        }
    })
    

    const [login, { data, error }] = useLoginMutation();

    console.log("data", data)
    console.log("error", error);

    const onSubmit = (data) => {
        const userInfo = {
            id: data.userId,
            password: data.password,
        }
        login(userInfo)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID: </label>
                <input type="text" {...register('id')}></input>
           </div>
            <div>
                <label htmlFor="pasword">Password: </label>
                <input type="password" {...register('password')}></input>
            </div>
            <Button htmlType="submit">Login</Button>
        </form>
    );
};

export default Login;