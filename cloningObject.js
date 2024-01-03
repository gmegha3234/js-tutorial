let user = { "name": "John" };
let permission1 = {
    name:"Megha",
    canEdit : true
};
let permission2 = {
    canRemove: false
};
Object.assign(user, permission1, permission2)//all objs are copied to first object user
console.log(user);// If obj has already key, then it gets updated

let clone = Object.assign({}, user);
console.log(clone);// { name: 'Megha', canEdit: true, canRemove: false }

let newObj = {
    name: "Ruhi",
    address: {
        city: "Jammu",
        state: "Jammu and Kashmir"
    }
};
let newObjClone = Object.assign({}, newObj);
console.log(newObj);
//But this cloning will not provide reference of address property

console.log(newObj.address === newObj.address);//return true as they refer to same location

// For deep cloning , we use structured cloning function
let deepClone = structuredClone({}, newObj);
console.log(newObj.address === deepClone.address);//false --- now they both refer to different objects

