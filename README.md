# ⭐ React-Project: Color Generator ⭐

## 🔗 Links

[Code Link]() <br>
[Live]() <br>
[Linkedin]()


## Learnings

📌1. React Hooks (useState, useEffect, useReducer, useContext) <br>
📌2. Conditional Rendering <br>
📌3. Map, filter and reduce <br>



## Acknowledgement

I am thankful to John Smilga for his amazing udemy course on React.



## Steps to create this project

1. Just rendering the items by creating components and useGlobalContext and pass the data to iterate and render the product. At this time i haven't added any functionality and just created reducer.js file for useReducer. data.js file contains data which is passed on context api/ useGlobalcontext and from there, we are rendering the images and data.

2. Creating useReducer -
 firstly write the initial state variable which contain object of all those whose state is changing.
 we have 
 const initialState= {
    loading:false,
    cart:cartItems(data from ./data.js),
    total:0,
    price:0
 }

 then we create reducer function and inside that return state.
 Now the state has some default values and they get passed as props in value of useContext and sended to all the components to display the total price, total products, cart i.e that data ...

 a. Clear Items functionality:
    1. create a function inside useContext and assign a dispatch message to it.
    2. pass that function into the value
    3. creat a functionality on reducer.js file where we return just {...state, cart:[]}

b. Remove items functionality:
    1.you need id to remove particular product from cart and function removeItem to dispatch in context.js
    2. use need to dispact("REMOVE_ITEMS) and write the login on reducer where you have to use filter method
    3. you also need to pass that funtion removeItem ( from context.js)  to cartItem  component as props to get id.

c. Increase 
    1. you need a function increase where you dispatch and id
    2. that function passed as props to cartItem component where after click this function get executed.
    3. logic will be written in reducer where first you need to map and check if id is same then return {...state, amount: item.amount +1} like this.

d. Decrease
    It is same as increase but we want to add one more functionality as product reaches 0, it gets deleted. so at last use filter and check where item.amount >=1 and return that elements only

e. get totals
    1. For this, you need to use useEffect which re-render when cart changes. inside useEffect, use dispatch
    2. on reducer.js, you need to use reducer function for calculating total products on cart and total price of products and update it. also fix the total price with toFixed() method upto 2 decimal places.

f. loading and get items
    1. write a asynchronous function which fetch the data from url. before that line, dispatch({type:"LOADING"});
    2. then after finding the json response, again use dispatch and pass the obtained response to payload.
    3. create one more useEffect and call above function only once first time.
    4. on reducer.js, if(loading) then return rest with loading:true
    5. also if(get_items) then return rest with cart:action.payload


You can also create increasing and decreasing in same function