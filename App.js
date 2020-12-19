import { Component } from "react";

class App extends Component{
   constructor(props){
     super(props);
  
     this.state={
     newItem:"",
     list:[],
     uplist:[]
    }    
  }
  updateInput(key,value){
    this.setState({
      [key]:value
    })
  }

  //Create Todo functionality
  addItem(){
    const newItem={
      id:1+Math.random(),
      value:this.state.newItem.slice()
    };

    const list=[...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem:""
    });
  }

  //delete Todo functionality
  deleteItem(id){
    const list=[...this.state.list];
    const updatedList=list.filter(item=> item.id!==id);
    this.setState({list:updatedList});
  }
  indeleteItem(id){
    const list=[...this.state.uplist];
    const updatedList=list.filter(item=> item.id!==id);
    this.setState({uplist:updatedList});
  }

  //mark complete functionality
  completeItem(id){
    const list=[...this.state.list];
    list.filter(item=> item.id===id);
    this.deleteItem(id);
    this.setState({uplist:list});
  }

  //Mark incomplete functionality
  incompleteItem(id){
    const uplist=[...this.state.uplist];
    uplist.filter(item=> item.id===id);
    this.indeleteItem(id);
    this.setState({list:uplist});
  }
  render(){
    return (
      <div className="App">
       <div>
         <h1>To do App</h1>
         <br/>
         <input type="text" placeholder="enter" value={this.state.newItem} onChange={e=> this.updateInput("newItem",e.target.value)}></input>
         <button
           onClick={()=>this.addItem()}
         >
         add
         </button>
         <ul className="newlist">
          {this.state.list.map(item=>{
            return(
              <li key={item.id}>
                 {item.value}
                 <button
                   onClick={()=> this.deleteItem(item.id)}>
                     Delete
                   </button>
                   <button
                   onClick={()=> this.completeItem(item.id)}>
                     completed
                   </button>
              </li>
            )
          })}
         </ul>
         <br/>
         <h2>Completed tasks</h2>
         <ul>
           {this.state.uplist.map(item=>{
             return(
              <li key={item.id}>
                 {item.value}
                 <button
                   onClick={()=> this.incompleteItem(item.id)}>
                     Incomplete
                   </button>
              </li>
             )
            })
          }
         </ul>
        </div>
      </div>
    );
  }
}

export default App;
