export default function getListStudentIds(arr) {
    let newArr = [];
    
    // Check if arr is an array using Array.isArray()
    if (Array.isArray(arr)) {
        newArr = arr.map(item => item.id);
    }

    return newArr;
}
