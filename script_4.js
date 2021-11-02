const objects = [
    {
        id: 1,
        displayName: 'Object John',
        date: '10-12-2020',
        enabled: true,
        relation: null
    },
    {
        id: 2,
        displayName: 'Object Kate',
        date: '21-06-2020',
        enabled: false,
        relation: {
            relationId: 1
        }
    },
    {
        id: 3,
        displayName: 'Object Bob',
        date: '03-04-2020',
        enabled: true,
        relation: {
            relationId: 1
        }
    },
    {
        id: 4,
        displayName: 'Object Alex',
        date: '12-12-2021',
        enabled: false,
        relation: null
    },
    {
        id: 5,
        displayName: 'Object Pooja',
        date: '30-07-2019',
        enabled: true,
        relation: {
            relationId: 4
        }
    },
    {
        id: 6,
        displayName: 'Object Scott',
        date: '15-02-2021',
        enabled: true,
        relation: {
            relationId: 2
        }
    },
    {
        id: 7,
        displayName: 'Object Sergey',
        date: '06-01-2020',
        enabled: true,
        relation: {
            relationId: 5
        }
    },
    {
        id: 8,
        displayName: 'Object Adhey',
        date: '21-03-2021',
        enabled: true,
        relation: {
            relationId: 5
        }
    },
    {
        id: 9,
        displayName: 'Object Travis',
        date: '10-08-2021',
        enabled: true,
        relation: {
            relationId: 1
        }
    },
    {
        id: 10,
        displayName: 'Object Artem',
        date: '24-09-2021',
        enabled: false,
        relation: {
            relationId: 4
        }
    },
    {
        id: 11,
        displayName: 'Object Stuart',
        date: '01-04-2020',
        enabled: true,
        relation: {
            relationId: 7
        }
    },
    {
        id: 12,
        displayName: 'Object Keith',
        date: '08-05-2020',
        enabled: true,
        relation: {
            relationId: 10
        }
    },
    {
        id: 13,
        displayName: 'Object Bill',
        date: '17-10-2020',
        enabled: true,
        relation: {
            relationId: 9
        }
    },
    {
        id: 14,
        displayName: 'Object Chuck',
        date: '15-04-2020',
        enabled: true,
        relation: null
    },
    {
        id: 15,
        displayName: 'Object Joel',
        date: '09-12-2020',
        enabled: true,
        relation: null
    },
    {
        id: 16,
        displayName: 'Object Tim',
        date: '12-01-2020',
        enabled: true,
        relation: {
            relationId: 15
        }
    },
    {
        id: 17,
        displayName: 'Object Tony',
        date: '05-09-2020',
        enabled: true,
        relation: {
            relationId: 7
        }
    },
    {
        id: 18,
        displayName: 'Object Jessica',
        date: '19-07-2021',
        enabled: true,
        relation: {
            relationId: 12
        }
    },
    {
        id: 19,
        displayName: 'Object Monica',
        date: '08-02-2021',
        enabled: true,
        relation: {
            relationId: 14
        }
    },
    {
        id: 20,
        displayName: 'Object Tony',
        date: '05-09-2020',
        enabled: true,
        relation: {
            relationId: 7
        }
    }
];
const fields = [
    {
        id: 30,
        fieldName: 'Date',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: null
    },
    {
        id: 31,
        fieldName: 'Name',
        permissions: {
            view: true,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 12
        }
    },
    {
        id: 32,
        fieldName: 'Time',
        permissions: {
            view: true,
            edit: true,
            remove: false
        },
        objectRelation: {
            objectId: 2
        }
    },
    {
        id: 33,
        fieldName: 'Rating',
        permissions: {
            view: false,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 4
        }
    },
    {
        id: 34,
        fieldName: 'Custom Name',
        permissions: {
            view: true,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 7
        }
    },
    {
        id: 35,
        fieldName: 'Email',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 19
        }
    },
    {
        id: 36,
        fieldName: 'Decimal',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: null
    },
    {
        id: 37,
        fieldName: 'Float',
        permissions: {
            view: true,
            edit: true,
            remove: false
        },
        objectRelation: {
            objectId: 15
        }
    },
    {
        id: 38,
        fieldName: 'Radio',
        permissions: {
            view: false,
            edit: false,
            remove: false
        },
        objectRelation: null
    },
    {
        id: 39,
        fieldName: 'Custom Rating',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 1
        }
    },
    {
        id: 40,
        fieldName: 'Relation',
        permissions: {
            view: true,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 7
        }
    },
    {
        id: 41,
        fieldName: 'Checkbox',
        permissions: {
            view: true,
            edit: true,
            remove: false
        },
        objectRelation: {
            objectId: 9
        }
    },
    {
        id: 42,
        fieldName: 'Checkboxes',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 9
        }
    },
    {
        id: 43,
        fieldName: 'Dropdown',
        permissions: {
            view: false,
            edit: false,
            remove: false
        },
        objectRelation: null
    },
    {
        id: 44,
        fieldName: 'Dynamic Tags',
        permissions: {
            view: true,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 17
        }
    },
    {
        id: 45,
        fieldName: 'Files',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 4
        }
    },
    {
        id: 46,
        fieldName: 'Long Text',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 20
        }
    },
    {
        id: 47,
        fieldName: 'Phone number',
        permissions: {
            view: true,
            edit: true,
            remove: false
        },
        objectRelation: null
    },
    {
        id: 48,
        fieldName: 'Price',
        permissions: {
            view: false,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 8
        }
    },
    {
        id: 49,
        fieldName: 'Status',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 12
        }
    },
    {
        id: 50,
        fieldName: 'Text',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 18
        }
    },
    {
        id: 51,
        fieldName: 'Yes/No',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 15
        }
    }
];


// 1. Необходимо сформироать массив который будет
// содержать только те поля которые имеют permissions.view:
// true

// 1)
// let result = [];
// for (let i = 0; i < fields.length; i++) {
//     if (fields[i].permissions.view) {
//         result.push(fields[i]);
//     }
// }

//let isPermissionViewTrue = fields.filter(item => item.permissions.view);
//console.log(result);
//console.log(isPermissionViewTrue);

// 2. Необходимо сформировать массив который будет
// содержать только те поля которые имеют все ключи
// пермиссий false

// 2)
// let permissionFalse = fields.filter(item => {
//    return !item.permissions.view && !item.permissions.edit && !item.permissions.remove;
//     });
// console.log(permissionFalse);

// 3. Необходимо сформировать массив полей и заменить
// полям которые имеют objectRelation.objectId c айдишника
// объекта на полный объект данных об объекте .
//     Взаимодействуем со вторым массивом

// 3)
// for
// let result = [];
// for (let i = 0; i < fields.length; i++) {
//     if (fields[i].objectRelation) {
//         fields[i].objectRelation.objectId = objects[fields[i].objectRelation.objectId];
//         result.push(fields[i]);
//     }
// }
//
// console.log(result);

// map
// let result = fields.map((item) =>{
//     if (item.objectRelation){
//         item.objectRelation.objectId = objects[item.objectRelation.objectId];
//             return item;
//     }
//     return item;
// });
// console.log(result);

// 4. Необходимо сформировать массив полей с
// проставленными пермиссиями в зависимости от того, что:
// - если у поля нет objectRelation, то пермиссии поля
// оставляем без изменений
// • если у поля есть objectRelation, то ставим все пермисии
// true, если объект objectRelation имеет enabled: true. Если
// же enabled: false, то ставим все пермиссии false
// for

// let result = [];
// for (let i = 0; i < fields.length; i++) {
//     if (fields[i].objectRelation) {
//         let objectRelationId = fields[i].objectRelation.objectId;
//         let enabled = objects[objectRelationId-1].enabled;
//         fields[i].permissions.view=enabled;
//         fields[i].permissions.edit=enabled;
//         fields[i].permissions.remove=enabled;
//         result.push(fields[i]);
//     }else{
//         result.push(fields[i]);
//     }
// }
// console.log(result);

// map
// let result = fields.map((item) => {
//     if (!item.objectRelation) {
//        return item;
//     }else{
//         for (let i of fields ){
//     if (item.objectRelation.relationId === i.id && i.enabled ) {
//         item.permissions.view = true;
//         item.permissions.edit = true;
//         item.permissions.remove = true;
//         return item;
//     } else if (item.objectRelation.objectId === i.id) {
//                 item.permissions.view = false;
//                 item.permissions.edit = false;
//                 item.permissions.remove = false;
//                 return item;
//             }
//         }
//     }return item;
// })
// console.log(result);


// 5. Необходимо сформировать массив объектов только тех у
// которых есть поля

// let isFieldExists =  fields.filter(item => Object.keys(item).length > 0);
// console.log(isFieldExists);


// 6. Необходимо сформировать объект такого формата
// {
//     [id объекта у которого есть поля]: [
//     {
//         [id поля]: {
//     объект пермиссий поля
// }
// },
// ...
// ],
// …
// }

// for
// let result = {};
// for (let item of fields){
//     if (item.objectRelation){
//         result[item.objectRelation.objectId] = [];
//         for (let value of fields){
//             if (value.objectRelation && value.objectRelation.objectId === item.objectRelation.objectId){
//                 let obj = {};
//                 obj[value.id] = value.permissions;
//                 result[item.objectRelation.objectId].push(obj);
//             }
//         }
//     }
// }
//
// console.log(result);

// reduce
let result = fields.reduce((acc,item) => {

})

// 7. Необходимо сформировать массив полей в котором будет
// изменен ключ edit на true, в том случае когда у нас view тоже true

// let changeView = fields.filter(item => item.permissions.view).map(item =>{
//     item.permissions.edit=true;
//     return item;
// });
// console.log(changeView);

// reduce
// let changeView = fields.reduce((acc,item) => {
//     if (item.permissions.view){
//         item.permissions.edit = true;
//         acc.push(item);
//     }
//     return acc;
// },[])
// console.log(changeView);


// 8. Необходимо сформировать массив полей который будет содержать только те поля у которых есть objectRelation и
// проставить всем этим полям дополнительный ключ relations: true

// let objectRelationExists = fields.filter(item => item.objectRelation!=null).map(item => {
//     item.relations = true;
//     return item;
// });
// console.log(objectRelationExists);

// reduce
// let objectRelationExists = fields.reduce((acc,item) => {
//     if (item.objectRelation){
//         item.relations = true;
//        acc.push(item);
//     } return acc;
// },[])
// console.log(objectRelationExists);

// 9. Необходимо получить массив полей отсортированных по
// fieldName
// function compare(a, b) {
//     if (a.fieldName > b.fieldName) {
//         return 1;
//     }
//     if (a.fieldName < b.fieldName) {
//         return -1;
//     }
//     return 0;
// }
// let sortedByFieldName = fields.sort(compare);
// console.log(sortedByFieldName);


// 10. Необходимо получить ответ на понимание того есть ли у
// нас хоть одно поле у которого все пермиссии true

// function isPermissionsTrue(element, index, array) {
//     return element.permissions.view && element.permissions.edit && element.permissions.remove;
// }
// let isPermissionTrue1 = ()=> {
//     for (const item of fields) {
//         if(item.permissions.view && item.permissions.edit && item.permissions.remove){
//             return true;
//         }
//         return false;
//     }
// }
// let isPermissionTrue2 = fields.some(isPermissionsTrue);
// let isPermissionTrue3 = fields.filter(isPermissionsTrue);
//
// console.log(isPermissionTrue1());
// console.log(isPermissionTrue2);
// console.log(isPermissionTrue3!=null);