log = print


def arrayManipulation(n, queries):
    arr = [0]*n
    for i in queries:
        for j in range(i[0], i[1]+1):
            arr[j-1] += i[2]

    return max(arr)


def arrManipulationHigherLevel(n, queries):
    arr = [0]*n

    for q in queries:
        arr[q[0]-1] += q[2]
        # log(arr)
        if q[1] != len(arr):
            arr[q[1]] -= q[2]
        # log(arr)

    maxvl = 0
    itt = 0
  #  log(arr)

    for q in arr:
        itt += q
     #   log(q)
        if itt > maxvl:
            maxvl = itt
   # log(maxvl)
    return maxvl


n = 5
queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]]

# log(arrayManipulation(n, queries))

arrManipulationHigherLevel(n, queries)
