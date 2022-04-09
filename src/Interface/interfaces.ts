import {Instance} from "mobx-state-tree";
import RootStore from "../ModelStorage/Stores/RootStore.store";
import {ContentModel} from "../ModelStorage/Models/Content.model";


export  interface  IRootStore extends  Instance<typeof RootStore>{

}
export  interface  IContentModel extends  Instance<typeof ContentModel>{

}