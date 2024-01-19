/// json type data

const fileData = {
    name :'Root',
    type:'folder',
    // view:'view',

    children:[
        {
            name:'Documents',
            type : 'folder',
            children:[
                {
                    name: 'project pdf',
                    type:'file'
                },
                {
                    name: 'Database pdf',
                    type:'file'
                }
            ]
        },
        {
            name:'Images',
            type : 'folder',
            children:[
                {
                    name: 'girl.jpg',
                    type:'file'
                },
                {
                    name: 'boy.jpg',
                    type:'file'
                }
            ]
        },
        {
            name:'Resumes',
            type : 'folder',
            children:[
                {
                    name: 'resume 1',
                    type:'file'
                },
                {
                    name: 'resume 2',
                    type:'file'
                }
            ]
        }
    ]

}

export default fileData;