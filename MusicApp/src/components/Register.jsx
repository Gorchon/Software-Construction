import {useState} from 'react';
import {authFLow, getDataAuth} from "../setup.js";

const Register = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleOnChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        const newValues ={
            ...form,
            [e.target.name]: e.target.value
        }
        console.log(newValues);
        setForm(newValues);
    }
    const handleLogin = async () => {
        const codeChallengeProm = await getDataAuth();
        authFLow(codeChallengeProm);
    };
    /*const handleLogin = async () => {
        const client_id='c1b5ccbc46ce4f548ed238245012fdf4';
        const client_secret='195c223c71834b319401d08294c4e446';
        const body='grant_type=client_credentials';
        const url='https://accounts.spotify.com/api/token';
        const token = 'Basic '+btoa(client_id+':'+client_secret);
        const response = await fetchSpotifyApi(url, 'POST',body,'application/x-www-form-urlencoded',token);
        navigate('/dashboard');

        localStorage.setItem('token', response.access_token);
        console.log(response.access_token);
        console.log(response);

    }*/
    return(
        <div className={'flex pl-10 pr-10 flex-col items-center bg-gradient-to-b from-spotify-grey from-90% to-gray-500 h-screen'}>
            <div className={' bg-gray-500/30 p-5 rounded-lg mt-10 hover:shadow-2xl hover:shadow-spotify-green/40'}>
            <div className={'text-2xl p-4 text-spotify-green font-bold'}>Login con spotify</div>
            <div className={'p-4'}>
                <p className={'text-spotify-green/90 p-2'}>Email</p>
                <input
                    className={'w-50 h-7 border-2 border-gray-700 rounded-lg bg-spotify-grey text-white'}
                    placeholder=' Email'
                    type='text'
                    name='email'
                    value={form.email}
                    onChange={handleOnChange}
                />
            </div>
            <div className={'p-4 '}>
                <p className={'text-spotify-green/90 p-2'}>Password</p>
                <input
                    className={'w-50 h-7 border-2 border-gray-700 rounded-lg bg-spotify-grey text-white'}
                    placeholder=' Password'
                    type='password'
                    name='password'
                    value={form.password}
                    onChange={handleOnChange}
                />
            </div>
            <div className={'p-5'}>
            <button className={'rounded-full bg-spotify-green w-20 hover:bg-spotify-green/50'} onClick={handleLogin}>Login</button>
            </div>
            </div>
        </div>
    )
}
export default Register;