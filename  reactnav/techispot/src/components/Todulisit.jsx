
export default function Todulisit() {

    let data = [{ 'task1': 'Assignment'},
    { 'task2': 'leetcode' },
    { 'task3': 'reels' },
    { 'task4': 'youtube' }];

    let list = data.map((kuchh) => <li>{kuchh.task}</li>)



    return (
        <>
            <ul>
                <li>assiments</li>
                <li>leetcode</li>
                <li>reel</li>
                <li>youtube</li>
            </ul>
        </>
    )
}
