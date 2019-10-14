export default async function getTusks(url) {
    let fetchResult =  [
        {
            id:1,
            text: 'tusk1',
            isCompleted: false
        },
        {
            id:2,
            text: 'tusk2',
            isCompleted: false
        },
        {
            id:3,
            text: 'tusk3',
            isCompleted: false
        },
        {
            id:4,
            text: 'tusk4',
            isCompleted: true
        },
    ];

    return Promise.resolve(fetchResult);
    // return new Promise((resolve,reject)=>{
    //     resolve(fetchResult);
    // });
}