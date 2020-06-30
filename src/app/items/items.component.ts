import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean=false;
  itemToEdit:Item;
  searchText;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItem().subscribe(items =>{
      
      console.log(items);
      this.items=items;
    });
  }
  deleteItem(item){
    this.itemService.deleteItem(item);
    console.log(item);
  }
  editItem(item){
    this.editState=true;
    this.itemToEdit=item;
  }
  clearState(){
    this.editState=false;
    this.itemToEdit=null;
  }
  updateItem(item){
    this.itemService.updateItem(item);
    this.clearState();
  }

}
