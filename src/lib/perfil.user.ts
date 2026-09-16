type Userprops = {
  name: string;
  image: string;
};

export async function User(): Promise<Userprops> {
  const res = await fetch(`/api/users/perfil`);

  if (!res.ok) {
    throw new Error("Erro buscando usuario");
  }

  return res.json();
}
