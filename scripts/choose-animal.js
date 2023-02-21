function chooseAnimal(name) {


if(name < 4)
{

    return "your animal is a sluggggggg" 
}
else if(4 < name < 6)
{
    return "your animal is NOT a sluggggggg 🐌"
}

}

//chooseAnimal("dadsfdasdfs");

$("#coolNameFactsOutput").html(chooseAnimal(name));