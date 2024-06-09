import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authClice";
import { verifyToken } from "../utils/verifyToken";


const Login = () => {

    const dispatch = useAppDispatch()

    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: 'A-0002',
            Password: 'admin123',
        }
    })
    

    const [login, {  error }] = useLoginMutation();

    

    const onSubmit = async(data) => {
        const userInfo = {
            id: data.userId,
            password: data.password,
        }
        const res = await login(userInfo).unwrap();

        const user = verifyToken(res.data.accessToken)
        console.log(user);

        dispatch(setUser({user: user, token: res.data.accessToken}))
      
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID: </label>
                <input type="text" {...register('userId')}></input>
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