

async function getSchools()
{
    try 
    {
        const res = await fetch('https://data.gov.il/api/action/datastore_search?resource_id=3f06e2f2-e2ad-41ac-9665-37d0625537f2&limit=400')
        const data = await res.json()
        return data.result.records;
        //console.log(data.result.records)
    } 
    catch (error) 
    {
        console.log("Error resource fetching ",error)
    }
}
//getSchools()

async function setup() 
{
    const schools = await getSchools()

    const tbody = document.querySelector("#preview")

    let inCity = null;
    document.querySelector(".btn").addEventListener("click", ()=>
    {       
        let city = document.querySelector(".form-control").value
       
        inCity = (city) ? schools.filter((s) => s.ezor == city) : schools

        tbody.innerHTML = ''
        inCity.forEach((school) => 
        {
            const s = new DrivingSchool(school._id, school.cod_ezor, 
                school.ezor, school.cod_beit_sefer, school.shem_beit_sefer, 
                school.telefon, school.cod_hiter, school.ktovet, school.menahel)
    
            tbody.innerHTML += s.createRow();
        });
        
    })
    

    schools.forEach((school) => 
    {
        const s = new DrivingSchool(school._id, school.cod_ezor, 
            school.ezor, school.cod_beit_sefer, school.shem_beit_sefer, 
            school.telefon, school.cod_hiter, school.ktovet, school.menahel)

        tbody.innerHTML += s.createRow();
    }); 
    
}
  
setup() 
