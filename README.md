## 🎶MusicTodo🎶

## 배포 주소
-> https://master--todolisthahaday.netlify.app/

## 📌 유의사항 
-> 반응형이 적용되어 있지 않습니다.<br/>


## 📜 프로젝트 소개
->  (👥👤👥👤뭐야...👤👤👥👥👥웅👥성👥👥👤) 지루한 Todolist 는 가라! <br/>
봐도봐도 질리지 않는 귀여운 컨셉의 Todolist와 함께 ,음악을 들으며 오늘의 할일을 작성해 보세요!!! <br/>
실시간 방송을 보며 오늘의 할일에 집중하여 하나씩 목표를 달성하는 ✨짜릿함✨을 느껴보세요!

## 시작 가이드
### Requirements
For building and running the application you need:

- [Npm 8.19.3](https://www.npmjs.com/package/npm/v/8.19.3)


### Installation
``` bash
$ git clone git@github.com:KDT1-FE/KDT5-M2.git
$ cd KDT5-M2
```

#### Frontend
```
$ cd KDT5-M2
$ npm install 
$ npm run dev
```

---

## Stacks 🐈

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        
![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)

### Development
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=SASS&logoColor=white)

---

## 화면 구성 📺

| 메인 페이지  | 
| :-------------------------------------------: |
|  <img width="600" alt="image" src="https://github.com/hahahaday12/todo_test/assets/101441685/adb2377e-6df9-4224-8394-7811256303be">| 
| 음악 플레이리스트 | 
|  <img width="400" height="500" alt="image" src="https://github.com/hahahaday12/todo_test/assets/101441685/f9557a58-87be-4130-b03c-a28fd148c9c2">| 
| 비디오 플레이리스트 | 
|  <img width="600" alt="image" src="https://github.com/hahahaday12/todo_test/assets/101441685/53084441-6e6d-4e62-a55f-c6be8d9a7223">| 
|  현재 온도, 날씨 아이콘 기능 | 
|  <img width="200" height="300" alt="image" src="https://github.com/hahahaday12/Music_Todo/assets/101441685/f55015ca-f491-4e28-93fa-c358ceb6551d">|

---

## ✨ 구현 기능✨
- 날씨 openApi를 이용하여 현재 위치에 맞는 날씨 데이터와 온도 데이터를 가져오고, 온도에 따라 날씨 이모티콘이 다르게 출력되도록 구현하였습니다. 
- todolist를 등록, 삭제, 수정 기능을 구현하였습니다.
- youtube openApi 를 이용하여 음악 아이콘을 클릭시 모달창이 뜨고, 현재 저장된 playlist 가 호출되게 구현하였습니다.
- youtube openApi 를 이용하여 비디오 아이콘을 클릭시 모달창이 뜨고, 현재 저장된 실시간 viediolist 가 호출되게 구현하였습니다.
- 현재 로컬 시간을 구하여, 현재 시간이 출력되는 기능을 구현하였습니다.
- 

#### ⭐️ 1) 할 일 목록(List)이 출력 기능 /  할 일 항목(Item)추가 기능.
-> input 컴포넌트와 list컴포넌트를 나누었기때문에 둘의 컴포넌트가 import 되어있는 LandingPage에 props로 상태값을 넘겨 줘야 합니다. <br/>
따라, input  컴포넌트 에는  기본값 {setItem} 를 넘겨주고 결고 값이 나타나는 result 창에는 {selectItem} 값을 넘겨 주었습니다. <br/>
-> input에 할일 데이터를 입력한 onChange 의 함수가 실행되고 등록 button 을 클릭하면 props.setData 를 사용해  정보를 SearchResult 의 컴포넌트에 데이터를 받아오게 됩니다.

▶LandingPage.jsx

```javascript
const [selectItem, setItem] = useState(false);
 <div className='LandingContainer_left'>
  <InputForm setData={setItem}/>
  <TodoResult getItem={selectItem}/>  
 </div> 
```
 ▶Input.jsx
 
<img width="450" alt="image" src="https://github.com/hahahaday12/React-Todo/assets/101441685/f4743be2-9c4b-487e-9c08-f766dca96a08"> <br/>
<img width="450" alt="image" src="https://github.com/hahahaday12/React-Todo/assets/101441685/a008e486-e937-40d7-b261-e23586a78683">

-> 처음 props로 넘어온 setData의 기본 값은 데이터가 등록되기 전 상태이기 때문에 임의의 변수 flag = flase 값을 넣어 주었습니다. <br/>
-> 그후 alert창에서  등록에 대한 유무를 물어본후에 , api를 할당해주었던 변수 todoPost를 이용해서 데이터를 넘겨 준후 props.setData(flag) flag 상태를 true 값으로 변경해 주었습니다. 

 ▶TodoResult.jsx
 
 <img width="450" alt="image" src="https://github.com/hahahaday12/React-Todo/assets/101441685/bd5bb909-358f-4fbd-a43d-3108959414b9"> <br/>
 <img width="450" alt="image" src="https://github.com/hahahaday12/React-Todo/assets/101441685/d0964471-263e-471a-ba5e-21f3a3aad704">

```javascript
const [dataList, setDatalist] = useState([]);
{dataList.map((item, index) => (


))}
```
->  TodoResult 페이지가 마운트 되었을때 useEffect 로 serarch의 함수를 실행합니다. search 함수에 getTodo() 로 데이터를 조회한후에, setDatalist 안에 받아온 데이터 값을 넣어 두었습니다.<br/>
-> map을 사용해서 dataList 를 배열 list 로 나타내게끔 구현하였습니다. 


#### ⭐️ 2) 할 일 항목 수정기능.

<img width="350" height="40" alt="image" src="https://github.com/hahahaday12/todo_test/assets/101441685/63ad47de-7d04-456d-957f-a40bba6034db"> <br/>
<img width="350" height="40" alt="image" src="https://github.com/hahahaday12/todo_test/assets/101441685/43abf676-a4c6-421c-ad7e-bc63ad09e7c8">

->  {editingItemId === item.id ? 의 조건식을 주어, 수정하려고 하는 editingItemId  와 현재 item.id 가 일치하면 

<img width="450" alt="image" src="https://github.com/hahahaday12/todo_test/assets/101441685/7118347b-ea0c-4838-a425-85876aa08d2b">

-> 리스트창을 input 으로 바꿔주고, 재 등록 할수 있도록 체크 표시 아이콘으로 바꿔주었습니다. <br/>

<img width="450" alt="image" src="https://github.com/hahahaday12/todo_test/assets/101441685/fb0d8627-db0a-4276-99f3-ffa5d38d9c28">

-> 아이디 값이 일치하지 않을시 (수정되기 전의 모습) flase값의 위치에 있는 코드가 실행됩니다. <br/>
-> 수정중일때 나타나는 

#### ⭐️ 3) 시계 아이콘 hover시 등록된 날짜, 수정된 날짜 보이기.
-> 

#### ⭐️ 4) Youtube OpenApi, recoil 을 사용하여 음악 플레이리스트, 비디오 플레이리스트  노출 기능
-> 

#### ⭐️ 5) 날씨 openApi를 사용하여 현재 위치, 현재온도 를 가져오고, 현재위치에 대한 날씨 데이터에 맞는 아이콘 출력.
-> 




---

##  🎇 느낀점 
-> 



##  🎇 아쉬운점
-> 








