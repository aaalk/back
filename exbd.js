const [videoList, setVideoList] = useState([
            {id: 11, chapterId: 1, title: 'React (базовый)', url: 'https://youtu.be/bnzcSC8AmHY'},
            {id: 22, chapterId: 1, title: 'React (продвинутый)', url: 'https://www.youtube.com/watch?v=HDajDASxn-w'},
            {id: 33, chapterId: 1, title: 'Video player with custom controls', url: 'https://youtu.be/r6qWEteVMyM'},
            {id: 35, chapterId: 1, title: 'vimeo', url: 'https://vimeo.com/428379848'},
            {id: 44, chapterId: 2, title: 'Прыжки со скакалкой', url: 'https://www.youtube.com/watch?v=gzm2VGvfTbY'},
            {id: 55, chapterId: 2, title: 'Скиппинг. Трюки со скакалкой', url: 'https://www.youtube.com/watch?v=kSnnlvJDU14'},
            {id: 66, chapterId: 2, title: 'Кардио тренировка дома', url: 'https://www.youtube.com/watch?v=IbA1zVI31jU'},
            {id: 77, chapterId: 3, title: 'ЛУЧШИЕ СЫРНИКИ В ТВОЕЙ ЖИЗНИ ЗА 5 МИНУТ!!!', url: 'https://www.youtube.com/watch?v=aOgblv4JJVM'},
            {id: 88, chapterId: 3, title: 'Ресторанный рецепт сырников', url: 'https://www.youtube.com/watch?v=DQ8kq2zgp7s'},
        ])
        const [notesBase, setNotesBase] = useState([
        {videoId: 11, time:988, text:'Как создать Реакт-проект', color: 0}, 
        {videoId: 11, time:1042, text:'Структура Реакт-приложения', color: 0}, 
        {videoId: 11, time:1175, text:'Как запустить', color: 3},
        {videoId: 11, time:1723, text:'Реакт-компоненты', color: 0},
        {videoId: 11, time:2525, text:'JSX - JS XML', color: 2},
        {videoId: 11, time:3957, text:'Что такое Хуки (Hooks), useState', color: 0},
        {videoId: 11, time:3957, text:'useCallback', color: 1},
        {videoId: 11, time:5713, text:'useMemo', color: 1},
        {videoId: 11, time:6113, text:'В списках у каждого элемента должен быть уникальный key!', color: 3},
        {videoId: 11, time:6731, text:'useReducer', color: 1},
        {videoId: 11, time:7273, text:'useRef', color: 1},
        {videoId: 11, time:7436, text:'useEffect', color: 1},
        {videoId: 11, time:7941, text:'css.module', color: 0},

        {videoId: 22, time:868, text:'Дерево волокон (Fiber)', color: 0},
        {videoId: 22, time:3000, text:'Заметка 3000', color: 0},
        {videoId: 22, time:5000, text:'Заметка 5000', color: 3},
        {videoId: 22, time:6000, text:'6000 секунд', color: 0},
        
        {videoId: 33, time:10, text:'10 секунд', color: 0},
        {videoId: 33, time:60, text:'60 секунд', color: 0},
        {videoId: 33, time:300, text:'300 секунд', color: 0},
    
        {videoId: 35, time:10, text:'10 секунд', color: 0},
        {videoId: 35, time:60, text:'60 секунд', color: 1},
        {videoId: 35, time:300, text:'300 секунд', color: 0},
    
        {videoId: 44, time:10, text:'10 секунд', color: 0},
        {videoId: 44, time:60, text:'60 секунд', color: 2},
        {videoId: 44, time:300, text:'300 секунд', color: 0},
    
        {videoId: 55, time:10, text:'10 секунд', color: 0},
        {videoId: 55, time:60, text:'60 секунд', color: 3},
        {videoId: 55, time:300, text:'300 секунд', color: 0},
    
        {videoId: 66, time:10, text:'10 секунд', color: 0},
        {videoId: 66, time:60, text:'60 секунд', color: 4},
        {videoId: 66, time:300, text:'300 секунд', color: 0},
    
        {videoId: 77, time:10, text:'10 секунд', color: 0},
        {videoId: 77, time:60, text:'60 секунд', color: 2},
        {videoId: 77, time:300, text:'300 секунд', color: 0},
    
        {videoId: 88, time:10, text:'10 секунд', color: 0},
        {videoId: 88, time:60, text:'60 секунд', color: 1},
        {videoId: 88, time:300, text:'300 секунд', color: 1},
    
    ])