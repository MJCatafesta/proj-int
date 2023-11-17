import notFoundImg from '../../../public/images/not-found/404.jpg';

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center grow bg-cyan-800">
      <h1 className="text-4xl mb-4 font-bold text-white  text-center">Ops! Página não encontrada.</h1>
      <p className="mb-4 text-white text-xl">A página que você tentou acessar não existe.</p>
      <img className="max-w-[50%] rounded-md" src={notFoundImg}></img>
    </main>
  );
}
