export class Films {
  public idFilms: number;
  public nameFilms: string;
  public genderFilms: string;
  public protagonistFilms: string;
  public imageFilms: string;

  constructor(id: number, name: string, gender: string, protago: string, imagen: string) {
    this.idFilms = id;
    this.nameFilms = name;
    this.genderFilms = gender;
    this.protagonistFilms = protago;
    this.imageFilms = imagen;
  }
}
