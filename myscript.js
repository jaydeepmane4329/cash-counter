// Select button
const btn = document.getElementById('btn');
//select textFeild
const textFeild = document.getElementById('input');
textFeild.focus();

// eventListerner To firstButton
btn.addEventListener('click', () =>{
    //condition
    
    if(textFeild.value){
        //Parent element.
        const parent = document.getElementById('box');
        // Creating New TextFeild.
        const newElement = document.createElement('input');
        //setting placeholder Atrribute.
        newElement.setAttribute("placeholder","Enter Paid Amount")
        // adding Css property to new Input feild.
        newElement.classList.add('input');
        // appending new element into DOM.
        parent.appendChild(newElement).focus();
        
        //Creating New Button
        const newButton = document.createElement('button');
        // setting value for the Button
        newButton.innerHTML = 'PRESS';
        // adding classList  to button.
        newButton.classList.add('button');
        // appending button into DOM
        parent.appendChild(newButton);
         // selecting parent Div of old inputFeild and button. to delete 
         const oldEleParent = document.getElementById('main');
         // selecting oldInputFeild to delete
         const firstInputFeild = document.getElementById('input');
         //selecting old button  to delete
         const firstButtonParent = document.getElementById('span');
     
         // here Delted OldButton.
         oldEleParent.removeChild(firstButtonParent);
        
         //here Deleted OldInputFeild
         oldEleParent.removeChild(firstInputFeild);
      

        //Applied EventListener to 'button' of Newly Created 'InputFeild'.
        newButton.addEventListener('click',() => {
            if(newElement.value){
           
            
            // here Deleted NewInputFeild.
            parent.removeChild(newElement);
            //here Delted NewButton
            parent.removeChild(newButton);
            
            let MoneyReturn = +newElement.value - +textFeild.value;
            const ReturnMoney = document.createElement('div');
            if(MoneyReturn >= 0){
                ReturnMoney.innerHTML =` Sucessful : ${MoneyReturn}Rs, Need to Return`;
                ReturnMoney.classList.add('return');


                let changeDistribution = document.getElementById('change');
                let Title = document.createElement('div');
                Title.innerHTML = " CHANGE DISTRIBUTION"
                changeDistribution.classList.add('title')
                changeDistribution.appendChild(Title);
                let distribution = document.createElement('div');
    
                let change = [2000,500,200,100,20,10,5,2,1];
                let remainder =MoneyReturn;
                let quotient = 0 ;
                 for(let i=0;i<change.length;i++){
                    quotient =   remainder / change[i];
                    remainder = remainder%change[i];
                    if(Math.floor(quotient) != 0 ){
                    distribution.innerHTML += `${change[i]}Rs - ${Math.floor(quotient)} ,`;
                    distribution.classList.add('dist');
                    changeDistribution.appendChild(distribution);
                    }
                 }

            }else{
                ReturnMoney.innerHTML = " Failed : Paid amount cannot Be Less than Bill amount";
                ReturnMoney.classList.add('Invalid');
            }
            parent.appendChild(ReturnMoney);

            
           
               
            
            }else{
                alert('enter a value first');
            }
        });
    
    }else{
        alert('enter a value first')
    }
});







