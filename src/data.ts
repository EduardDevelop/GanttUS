/**
 * Gantt DataSource
 */

export let projectNewData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Product concept',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30, resources: [2] },
            { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3, resources: [3] },
            { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 2, Predecessor: '2', Progress: 30, resources: [4] }
        ]
    },
    {
        TaskID: 5, TaskName: 'Concept approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3,4', resources: [1],
        Indicators: [
            {
                'date': '04/10/2019',
                'name': 'Design Phase',
                'tooltip': 'Design phase completed',
                'iconClass': 'okIcon e-icons'
            }
        ]
    },
    {
        TaskID: 6,
        TaskName: 'Market research',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 7,
                TaskName: 'Demand analysis',
                StartDate: new Date('04/04/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5', Progress: 30, resources: [5] },
                    { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5', resources: [6] }
                ]
            },
            {
                TaskID: 10, TaskName: 'Competitor analysis', StartDate: new Date('04/04/2019'), Duration: 4,
                Predecessor: '7, 8', Progress: 30, resources: [4]
            },
            { TaskID: 11, TaskName: 'Product strength analsysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '9', resources: [8] },
        ]
    },
];

export let editingResources: Object[] = [
    { resourceId: 1, resourceName: 'Martin Tamer' },
    { resourceId: 2, resourceName: 'Rose Fuller' },
    { resourceId: 3, resourceName: 'Margaret Buchanan' },
    { resourceId: 4, resourceName: 'Fuller King' },
    { resourceId: 5, resourceName: 'Davolio Fuller' },
    { resourceId: 6, resourceName: 'Van Jack' },
    { resourceId: 7, resourceName: 'Fuller Buchanan' },
    { resourceId: 8, resourceName: 'Jack Davolio' },
    { resourceId: 9, resourceName: 'Tamer Vinet' },
    { resourceId: 10, resourceName: 'Vinet Fuller' },
    { resourceId: 11, resourceName: 'Bergs Anton' },
    { resourceId: 12, resourceName: 'Construction Supervisor' }
];