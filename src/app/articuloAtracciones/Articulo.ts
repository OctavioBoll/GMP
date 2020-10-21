export class ArticuloAtraccion{
    IdArticuloAtraccion: number;
    Nombre: string;
    Capacidad: string;
    AlturaMin: number;
    EdadMin: number;
    Mantenimiento: string;
    Imagen: string;
}

export const ArticulosAtracciones: ArticuloAtraccion[] = [
    {IdArticuloAtraccion: 1, Nombre: "Combate laser" ,Capacidad:"en la sala pueden participar hasta 10 personas.",AlturaMin: 1.10, EdadMin: 7,Mantenimiento:"semanal.", Imagen:"combateLaser.jpg"},
    {IdArticuloAtraccion: 2, Nombre: "Montaña rusa 'el dolar'" ,Capacidad:" 7 asientos dobles, 14 personas en total.",AlturaMin: 1.30,EdadMin: 13,Mantenimiento:"diaria.",Imagen:"montañaRusa.jpg"},
    {IdArticuloAtraccion: 3, Nombre: "La calesita 'Tinkerbell'" ,Capacidad:"12",AlturaMin: 0,EdadMin: 4,Mantenimiento:" cada 15 días.",Imagen:"calesita.jpg"},
    {IdArticuloAtraccion: 4, Nombre: "El tren fantasma" ,Capacidad:"2 personas por carro, 8 carros.",AlturaMin: 0,EdadMin: 5,Mantenimiento:" cada 15 días.",Imagen:"trenFantasma.jpg"},
    {IdArticuloAtraccion: 5, Nombre: "Autitos Chocadores" ,Capacidad:"20",AlturaMin: 1.20,EdadMin: 10,Mantenimiento:" cada 15 días.",Imagen:"autosChocadores.jpg"},
    {IdArticuloAtraccion: 6, Nombre: "Las tacitas giratorias" ,Capacidad:"12",AlturaMin: 1.10,EdadMin: 10,Mantenimiento:"cada 15 días.",Imagen:"tazasGiratorias.jpg"},
    {IdArticuloAtraccion: 7, Nombre: "Telecombate" ,Capacidad:"12 , cada una con 2 asientos.",AlturaMin: 1.20,EdadMin: 12,Mantenimiento:" cada 7 dias.",Imagen:"telecombate.jpg"},
    {IdArticuloAtraccion: 8, Nombre: "Barco Vikingo" ,Capacidad:" 24.",AlturaMin: 1.20,EdadMin: 11,Mantenimiento:" cada 7 dias.",Imagen:"barcoVikingo.jpg"}


];