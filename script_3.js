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


// 1. Необходимо получить отсортированный массив объектов по дате.

// 1)

const sortObj = objects.sort(function (a,b){
    let _a = a.date.split("-").reverse().join("");
    let _b = b.date.split("-").reverse().join("");
    if(_a > _b){
        return 1;
    } else if(_a < _b){
        return -1;
    }else {
        return 0;
    }
})
console.log(sortObj)

// 2. Необходимо получить массив объектов которые имеют enabled: true

// 2)
let enabledList = [];
for (let i = 0; i < objects.length; i++) {
    if (objects[i].enabled === true){
        enabledList.push(objects[i]);
    }
}
console.log(enabledList);

// 3. Необходимо получить объект объектов собранных по месяцам и годам.
//     Формат должен быть
// (должно быть несколько решений, через циклы(for), map и другие
// перебирающие методы, reduce)
// {
//     [год]: {
//     [месяц]: [объект, объект...],
//         [месяц]: [объект, объект...],
// …
// },
//     [год]: {
//     [месяц]: [объект, объект...],
//         [месяц]: [объект, объект...],
// …
// },
// ...
// }

// 3)
let result = {};
for (let i = 0; i < objects.length; i++) {
    let year = objects[i].date.split('-')[2];
    result[year] = {};
    for (let j = 0; j < objects.length; j++) {
        if (objects[j].date.split('-')[2] === year) {
            let month = objects[j].date.split('-')[1]
            result[year][month] = [];
            for (let k = 0; k < objects.length; k++) {
                if (objects[k].date.split('-')[1] === month) {
                    result[year][month].push(objects[k]);
                }
            }
        }
    }
}
console.log(result)

// 4. Необходимо получить массив объектов которым необходимо заменить
// relationId на полный объект данных.

// 4)

let result = [];
for (let i = 0; i < objects.length; i++) {
    if (objects[i].relation) {
        objects[i].relation.relationId = objects[objects[i].relation.relationId - 1];
        result.push(objects[i]);
    }
}
console.log(result)

// 5. Необходимо получить массив объектов у которых есть relation.

// 5)
let relationList = [];
for (let i = 0; i < objects.length; i++) {
    if (objects[i].relation !== null) {
        relationList.push(objects[i]);
    }
}
console.log(relationList);

// 6. Необходимо получить получить объект в котором сформировать данные по
// relation объектам. Формат:
// (должно быть несколько решений, через циклы(for), map и другие
// перебирающие методы, reduce)
// {
//     [id объекта на который ссылаются другие объекты по relation.relationId] :
//     [массив объектов у которых relation.relationId тот который указан в этом ключе ],
// ....
// }

// попробую сделать!

// 7. Необходимо получить массив объектов чья дата приходится на 2020 год и
// поменять ему ключ enabled на true. (должно быть несколько решений, через
// циклы(for), map и другие перебирающие методы, reduce)

// 7)
//1.for
let is2020 = () => {
    let result =[];
    for (const item of objects) {
        if(item.date.split('-')[2] === '2020'){
            item.enabled = true;
            result.push(item);
        }
    } return result;
}
console.log(is2020());
//
//2.filter.map
let is2020 = objects.filter(item => item.date.split('-')[2] === '2020').map(item => {
    item.enabled = true;
    return item;
});

console.log(is2020);

//3.reduce
let result = objects.reduce((acc, item) => {
    if (item.date.split('-')[2] === '2020') {
        item.enabled = true;
        acc.push(item);
    }
    return acc;
}, [])
console.log(result);


// 8. Необходимо получить массив объектов. Объект должен иметь значение
// enabled такое что если у него нет relation, то значение false. Если relation есть,
// то значение enbaled берется от того значение которое указано в объекте по
// ссылке relationId

// 8)
// let arr1 = objects.filter(item => item.relation !== null).map(item => {
//     let relationId = item.relation.relationId;
//    console.log("id " + item.id + "relation id " +relationId);
//    item.enabled = objects[relationId - 1].enabled;
//    console.log("id " + item.id + "relation id " + relationId + "  enabled " + objects[relationId-1].enabled);
//     return item;
// });
//
// let arr2 = objects.filter(item => item.relation === null).map(item => {
//     item.enabled = false;
//     return item;
// });
// console.log(arr1);
// console.log(arr2);
// let arr3 = arr1.concat(arr2);
// arr3.sort(function (a, b) {
//     if (a.id > b.id) {
//         return 1;
//     }
//     if (a.id < b.id) {
//         return -1;
//     }
//     return 0;
// });
// console.log(arr3);
// let result = [];
// let relationToEnabled =  () => {
//
//     for (let i = 0; i < objects.length; i++) {
//         if (objects[i].relation !== null) {
//             let relationId = result[i].relation.relationId;
//             result[i].enabled = objects[relationId-1].enabled;
//
//         } else {
//            result[i].enabled = false;
//
//         }
//
//     } return result;
// }
// relationToEnabled();
//  console.log(relationToEnabled());

// let relationToEnabled = objects.map(item => {
//     if(item.relation===null){
//         item.enabled=false
//     }else{
//
// }
//     return item;
// });
//
// console.log(relationToEnabled);
//не получилось сделать что бы правильно работало, это все варианты что делал


//9. Необходимо получить понимание того, что есть ли у всех объектов relation или нет

// 9)
//1.for
let relation1 = ()=> {
    for (const item of objects) {
        return item.relation !== null;
    }
}
//2.find
let relation2 = objects.find((item) => item.relation === null);
console.log(relation1());
console.log(relation2===null);


//10. Необходимо получить понимание есть ли объекты с enabled: true

// 10)
// 1.for
let enabled1 = ()=> {
    for (const item of objects) {
        return item.enabled === true;
    }
}
//2.filter
let enabled2 = objects.filter((item) => item.enabled === true);

console.log(enabled1());
console.log(enabled2!=null);