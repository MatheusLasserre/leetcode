function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let tmp = Array.from({length: m+n}).fill(0) as number[]
    let curIdx = 0;
    let nums2Idx = 0;
    for(let i = 0; i < (m+n); i++){
        let inserted = false;
        if(i >= m) {
             tmp[curIdx] = nums2[nums2Idx];
                curIdx++
                nums2Idx++
                inserted = true;
        }
        while(!inserted) {
            if(nums1[i] >= nums2[nums2Idx] && nums2Idx < n) {
                tmp[curIdx] = nums2[nums2Idx];
                curIdx++
                nums2Idx++
            } else {
                tmp[curIdx] = nums1[i];
                inserted = true;
                curIdx++
                break
            }
    }
        nums1[i] = tmp[i]
    }
};