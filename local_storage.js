const localData = document.querySelectorAll('.inputs');
const localStoreData = {
  name: '',
  email: '',
  message: '',
};

localData.forEach((input) => {
  input.addEventListener('input', () => {
  localStoreData[input.name] = input.value;
  localStoreData[input.email] = input.value;
  localStoreData[input.message] = input.value;
  localStorage.setItem('information', JSON.stringify(localStoreData));
  });
});
const informationStored = JSON.parse(localStorage.getItem('information'));
if (informationStored) {
  localData.forEach((element) => {
    element.value = informationStored[element.name];
  });
}
