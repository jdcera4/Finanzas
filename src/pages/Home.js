import { CardProduct } from "../components/cardProduct";

import { NavBar } from "../components/navbar";

import { useAuth } from "../context/AuthContext";

export function Home() {
  const { user } = useAuth();
  const rol = {
    wGQEkEluD5PfI6g3LJkoloYNCCn2: ['fidelizado ', ' David Cera'],
    q41ns1SElgP8z7HWxI0BfLs83S33: ['fidelizado', 'Camilo Restrepo'],
    zhXX5TIu29VAJ0bLiGzr7aeLUE12: 'admin'
  }

  const ids = ['wGQEkEluD5PfI6g3LJkoloYNCCn2', 'q41ns1SElgP8z7HWxI0BfLs83S33']
  if (rol[user.uid] !== 'admin') {
  return (
    <div style={{width: '100%'}}>
      <NavBar />
      <h1>Hello {user.email}</h1>
      <CardProduct name='david' />
      <CardProduct name='david' />
    </div>
  )} else{
    return (
      <div style={{width: '100%'}}>
        <NavBar />
        
        <h1>Hola admin</h1>
        <h2>Usuarios fidelizados</h2>
        <p>{rol.wGQEkEluD5PfI6g3LJkoloYNCCn2[1]}</p>
        <p>{rol.q41ns1SElgP8z7HWxI0BfLs83S33[1]}</p>
      </div>
    )
  }
}
