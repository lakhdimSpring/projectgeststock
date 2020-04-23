import{Injectable} from '@angular/core';
import {Produit} from '../shared/produit'

@Injectable()
export class ProduitMockService{

    private PRODUITS : Produit[]=[];

    constructor(){
        let p1 = new Produit("Livre",50,20);
        let p2 = new Produit("cahier",40,12);
        let p3 = new Produit("stylo",120,12.4);

        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);

    }

    public getProduits() : Produit[]{
        return this.PRODUITS;
    }

}