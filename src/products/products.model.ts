export class Product {
  constructor(
    //esto es lo mismo que definir las variables como globales con el this.variable por ejemplo.
    public description: string,
    public name: string,
    public id: string,
  ) {}
}
