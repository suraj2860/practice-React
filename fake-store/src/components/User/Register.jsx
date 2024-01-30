import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [response, setResponse] = useState({});
    const [btnClicked, setBtnClicked] = useState(false);

    const navigate = useNavigate();

    // useEffect(() => {

    // }, [username, password, email]);

    const handleSignup = (e) => {
        e.preventDefault();
        if (username && password) {
            fetch('https://api.freeapi.app/api/v1/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email,
                    role: "USER"
                }),
            }).then((res) => {
                // if (res.ok) {
                    return res.json();
                // } else {
                //     throw new Error(res.json());
                // }
            })
                .then((json) => {
                    if(json.statusCode === 200){
                    setResponse({ status: 'success', data: json });
                    navigate('/')}
                    else setResponse({ status: 'failed', error: json.message });
                })
                // .catch((error) => {
                //     setResponse({ status: 'failed', error: error.message });
                // });

        }

        setBtnClicked(true);
    };

    return (
        <>
            {/* component */}
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n\n  html, body{\n    font-family: 'Roboto', sans-serif;\n  }\n\n  .break-inside {\n    -moz-column-break-inside: avoid;\n    break-inside: avoid;\n  }\n  body {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    min-height: 100vh;\n    line-height: 1.5;\n  }\n  \n"
                }}
            />
            {/* Example */}
            <div className="flex min-h-screen">
                {/* Container */}
                <div className="flex flex-row w-full">
                    {/* Sidebar */}
                    <div className="hidden lg:flex flex-col justify-between bg-gray-900 text-white lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
                        <div className="flex items-center justify-start space-x-3">
                            <span className="bg-yellow-600 rounded-full w-8 h-8" />
                            <a href="/" className="font-medium text-xl">
                                fakeStore
                            </a>
                        </div>
                        <div className="space-y-5">
                            <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
                                Enter your account and shop your favorites
                            </h1>
                            <p className="text-lg">Already have an account?</p>
                            <Link to={'/'}><button className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-yellow-600 text-black">
                                Log in here
                            </button></Link>
                        </div>
                        <p className="font-medium">© 2022 fakeStore</p>
                    </div>
                    {/* Login */}
                    <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                        {/* Login box */}
                        <div className="flex flex-1 flex-col  justify-center space-y-5 w-2/4">
                            <div className="flex flex-col space-y-2 text-center">
                                <h2 className="text-3xl md:text-4xl font-bold">
                                    Sign up
                                </h2>
                                <p className="text-md md:text-xl">
                                    to place the order! Happy shopping!
                                </p>
                            </div>
                            <div className="flex flex-col max-w-md space-y-5">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                        setBtnClicked(false);
                                    }}
                                    value={username}
                                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setBtnClicked(false);
                                    }}
                                    value={email}
                                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                                />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setBtnClicked(false);
                                    }}
                                    placeholder="Password"
                                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                                />

                                {/* <Link onClick={(e) => handleSignup(e)} to={response && response.status === 'success' ? '/' : '/register'} className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"> */}
                                    <button onClick={(e) => handleSignup(e)} className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                                        Sign up
                                    </button>
                                    {/* </Link> */}

                                {btnClicked && response && response.status === 'failed' && (
                                    <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded">
                                        {response.error}
                                    </div>
                                )}
                                <div className="flex justify-center items-center">
                                    <span className="w-full border border-black" />
                                    <span className="px-4">Or</span>
                                    <span className="w-full border border-black" />
                                </div>
                                <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                                    <span className="absolute left-4">
                                        <svg
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                        >
                                            <path
                                                fill="#EA4335 "
                                                d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                                            />
                                            <path
                                                fill="#34A853"
                                                d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                                            />
                                            <path
                                                fill="#4A90E2"
                                                d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                                            />
                                            <path
                                                fill="#FBBC05"
                                                d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                                            />
                                        </svg>
                                    </span>
                                    <span>Sign up with Google</span>
                                </button>
                            </div>
                        </div>
                        {/* Footer */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register