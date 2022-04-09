import {types} from "mobx-state-tree";

export const  ContentModel = types.model('Content',{
    id:types.identifier,
    title:'',
    comment:'',
    notes:'',
    seen:false,

})
    .views((self) =>({
        get isSeen(){
            return self.seen
        },
        FindTitle(param:any){
            self.title.includes(param)
        }
    }))
    .actions((self) => ({
        changeNotes(value:string){
            self.notes =value
        },
        changeSeen(state:boolean){
            self.seen =state
        }
    }))