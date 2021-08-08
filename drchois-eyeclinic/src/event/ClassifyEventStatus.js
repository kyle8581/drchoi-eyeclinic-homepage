function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
}
export const classifyEventStatus = (start, end) => {
    const curDate = formatDate()
    // 7일 이내의 이벤트를 new 로 표시
    var newLimit = new Date(start)
    const newLimitOffset = 7
    newLimit.setDate(newLimit.getDate() + newLimitOffset)
    var m = ('0' + (newLimit.getMonth() + 1)).slice(-2)
    var d = ('0' + newLimit.getDate()).slice(-2)
    var newLimitString = newLimit.getFullYear() + '-' + m + '-' + d
    console.log(newLimitString)
    if (curDate > end) {
        return 'end'
    } else if (start <= curDate && curDate <= end) {
        if (curDate <= newLimitString) {
            return 'new'
        } else {
            return 'ongoing'
        }
    } else {
        return 'not yet'
    }
}
