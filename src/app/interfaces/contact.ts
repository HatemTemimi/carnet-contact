export class Contact {
  id: number = 1;

  nom: string = '';

  prenom: string = '';

  dateDeNaissance?: string = '';

  addresses?: {
    type: string;
    rue: string;
    numero: number;
    ville: string;
    codePostal: number;
    pays: string;
    commentaire: string;
    numeroTel: number;
  }[];

  constructor(init?: Partial<Contact>) {
    Object.assign(this, init);
  }
}
