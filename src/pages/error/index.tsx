import { Link } from "react-router-dom"; 

export function ErrorPage(){
    return(
        <div className="flex w-full min-h-screen justify-center items-center flex-col text-white">
            
            <h1 className="font-bold text-5xl mb-4">
                404
            </h1>
            <h1 className="font-bold text-4xl mb-4">
                Página não encontrada!
            </h1>
            <p className="italic text-2xl mb-4">
                Você caiu numa página que não existe</p>
            <Link className="bg-blue-500 font-medium py-1 px-4 rounded-md"
            to="/">
                Voltar para home
            </Link>
        </div>
    )
}
