//快速排序
function chose_sort(arr,n){
	for(let i = 0;i<n;i++){
        let minindex = i
        for(var j= i+1;j<n;j++){
        	if(arr[j] < arr[minindex]){
        		minindex = j     		
        	}
        }
        let swap = 0
        swap  = arr[i]
        arr[i] = arr[minindex]
        arr[minindex] =  swap
	}
	return arr
}
let testarr = [10,8,5,9,4,6,3,1,2,7]
console.log(chose_sort(testarr,9))

//插入排序
function insert_sort(arr,n){
        for(let i = 1;i<n;i++){
                for(let j = i;j>0;j--){
                        if(arr[j] < arr[j-1]){
                                let swap = 0
                                swap  = arr[j-1]
                                arr[j-1] = arr[j]
                                arr[j] =  swap
                        }else{
                                break
                        }
                }
        }
        return arr
}
let testarrnumber = [10,8,5,9,4,6,3,1,2,7]
console.log(insert_sort(testarrnumber,10))