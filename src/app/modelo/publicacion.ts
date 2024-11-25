//este es el objeto que estará en todos lados. En el servicio se conecta preference para realizar persistencia de lista de objetos de este tipo.
export interface Publicacion {
    titulo:string
    imagen: string //para su mejor manejo se guarda en base64
    descripcion: string
    fecha: Date
}
