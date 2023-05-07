class DrivingSchool
{
    constructor(id, regionCode=0, city=0, schoolCode=0, schoolName=0,
        phone=0, permitCode=0, address=0, boss=0)
    {
        this.id = id
        this.regionCode = regionCode
        this.city = city
        this.schoolCode = schoolCode
        this.schoolName = schoolName
        this.phone = phone
        this.permitCode = permitCode
        this.address = address
        this.boss = boss
    }

//                    <td>${this.id}</td>
    createRow()
    {        
        return `<tr>
                    <th scope="row">${this.id}</th>
                    <td>${this.regionCode}</td>
                    <td>${this.city}</td>
                    <td>${this.schoolCode}</td>
                    <td>${this.schoolName}</td>
                    <td>${this.phone ? this.phone : 'No'}</td>
                    <td>${+this.permitCode ? this.permitCode : 'No'}</td>
                    <td>${this.address ? this.address : 'No'}</td>
                    <td>${this.boss}</td>
                </tr>`
    }
}
