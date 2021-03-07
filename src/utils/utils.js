const create_url = (checkin, checkout) => {
    const url = `https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation&sid=6398e25c-f78c-4919-90cb-1325eb1f41ce#/&diff=false&CheckIn=${checkin}&CheckOut=${checkout}&Code=&group_code=&loyality_card=&NRooms=1&ad=1&ch=0&ag=-`
    return url
}

module.exports = {
    create_url
}