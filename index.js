



let array= {
  "gender": "male",
  "name": "Jhon",
  "location": {
    "street": {
      "number": 9011,
      "name": "Hoornbruglaan"
    },
    "city": "Hagestein",
    "state": "Overijssel",
    "country": "Netherlands",
    "postcode": "9272 SR",
  },
  "email": "jellie.roozen@example.com",
  "phone": "(067) 8555467",
  "picture": {
    "large": "https://randomuser.me/api/portraits/women/93.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/93.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/93.jpg"
  },

}
    
    

function nameUser() {
    let box1=document.querySelector('.box-1')
    let ul=document.querySelector('.ul-1')
        let li1=document.createElement('li')
        li1.innerText=array.gender

        let li2=document.createElement('li')
        li2.innerText=array.name
  
        li1.style.backgroundColor='red'
        li2.style.backgroundColor='red'

        ul.append(li1,li2) 
    
}
nameUser()



function city() {
  let box2=document.querySelector('.box-2')
  let ul=document.querySelector('.ul-2')
  let li1=document.createElement('li')
  li1.innerText=array.location.street.number

  let li2=document.createElement('li')
  li2.innerText=array.location.street.name
  li1.style.backgroundColor='yellow'
  li2.style.backgroundColor='yellow'
  ul.append(li1,li2)
  
}
city()

function contact() {
  let box3=document.querySelector('.box-3')
  let ul=document.querySelector('.ul-3')
  let li1=document.createElement('li')
  li1.innerText=array.email

  let li2=document.createElement('li')
  li2.innerText=array.picture.large
  li1.style.backgroundColor='green'
  li2.style.backgroundColor='green'
  ul.append(li1,li2)
  
}
contact()
