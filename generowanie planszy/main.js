var DecisionTree = require('decision-tree');
const mnist = require('mnist');
const synaptic = require('synaptic');

 var training_data = [
{'material':'Metal','weight':3,'shape':'Round','color':'Brown','quality':'New','size':1,'temperature':2,'behavior':'Disarm'},
{'material':'Metal','weight':3,'shape':'Square','color':'Black','quality':'Old','size':3,'temperature':3,'behavior':'Detonate'},
{'material':'Metal','weight':4,'shape':'Round','color':'Black','quality':'New','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Metal','weight':4,'shape':'Round','color':'Brown','quality':'Old','size':4,'temperature':3,'behavior':'Secure'},
{'material':'Metal','weight':4,'shape':'Square','color':'Grey','quality':'Normal','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Metal','weight':4,'shape':'Square','color':'Black','quality':'Normal','size':3,'temperature':2,'behavior':'Detonate'},
{'material':'Metal','weight':5,'shape':'Elipse','color':'Green','quality':'Normal','size':3,'temperature':1,'behavior':'Disarm'},
{'material':'Metal','weight':5,'shape':'Square','color':'Grey','quality':'Old','size':1,'temperature':4,'behavior':'Secure'},
{'material':'Metal','weight':5,'shape':'Round','color':'Grey','quality':'Old','size':3,'temperature':3,'behavior':'Secure'},
{'material':'Metal','weight':5,'shape':'Round','color':'Black','quality':'Normal','size':2,'temperature':3,'behavior':'Disarm'},
{'material':'Metal','weight':6,'shape':'Non-regular','color':'Colorful','quality':'New','size':2,'temperature':4,'behavior':'Secure'},
{'material':'Metal','weight':6,'shape':'Round','color':'Grey','quality':'Old','size':3,'temperature':3,'behavior':'Secure'},
{'material':'Metal','weight':5,'shape':'Round','color':'Grey','quality':'Old','size':4,'temperature':3,'behavior':'Secure'},
{'material':'Metal', 'weight': 1, 'shape':'Non-regular', 'color': 'Colorful', 'quality': 'Old','size':1,'temperature':2, 'behavior': 'Detonate' },
{'material':'Metal', 'weight': 4,'shape':'Elipse','color':'Gold','quality':'Normal','size':3,'temperature':3,'behavior':'Secure'},
{'material':'Metal', 'weight': 4,'shape':'Square','color':'Gold','quality':'New','size':3,'temperature':2,'behavior':'Disarm'},
{'material':'Metal', 'weight': 3,'shape':'Round','color':'Brown','quality':'Old','size':3,'temperature':4,'behavior':'Secure'},
{'material':'Metal', 'weight': 6,'shape':'Round','color':'Grey','quality':'Normal','size':4,'temperature':3,'behavior':'Secure'},
{'material':'Metal', 'weight': 5,'shape':'Elipse','color':'Grey','quality':'Old','size':4,'temperature':4,'behavior':'Secure'},
{'material':'Metal', 'weight': 2,'shape':'Square','color':'Brown','quality':'New','size':2,'temperature':3,'behavior':'Detonate'},
{'material':'Metal', 'weight': 2,'shape':'Elipse','color':'Brown','quality':'Old','size':1,'temperature':3,'behavior':'Detonate'},
{'material':'Metal', 'weight': 3,'shape':'Non-regular','color':'Black','quality':'Normal','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Metal', 'weight': 4,'shape':'Round','color':'Colorful','quality':'New','size':3,'temperature':2,'behavior':'Disarm'},
{'material':'Metal', 'weight': 5,'shape':'Square','color':'Gold','quality':'New','size':3,'temperature':3,'behavior':'Secure'},
{'material':'Metal', 'weight': 6,'shape':'Round','color':'Brown','quality':'Normal','size':2,'temperature':3,'behavior':'Secure'},
{'material':'Metal', 'weight': 2,'shape':'Elipse','color':'Grey','quality':'New','size':1,'temperature':2,'behavior':'Detonate'},
{'material':'Metal', 'weight': 3,'shape':'Non-regular','color':'Black','quality':'Normal','size':3,'temperature':2,'behavior':'Disarm'},
{'material':'Metal', 'weight': 2,'shape':'Round','color':'Green','quality':'Normal','size':3,'temperature':2,'behavior':'Detonate'},
{'material':'Metal', 'weight': 3,'shape':'Elipse','color':'Green','quality':'New','size':4,'temperature':1,'behavior':'Disarm'},
{'material':'Metal', 'weight': 4,'shape':'Square','color':'Black','quality':'Normal','size':4,'temperature':4,'behavior':'Secure'},
{'material':'Metal', 'weight': 5,'shape':'Round','color':'Brown','quality':'New','size':1,'temperature':1,'behavior':'Disarm'},
{'material':'Metal', 'weight': 3,'shape':'Non-regular','color':'Black','quality':'Old','size':1,'temperature':2,'behavior':'Detonate'},
{'material':'Metal', 'weight': 4,'shape':'Elipse','color':'Brown','quality':'Old','size':2,'temperature':4,'behavior':'Secure'},
{'material':'Metal', 'weight': 1,'shape':'Non-regular','color':'Colorful','quality':'Normal','size':2,'temperature':2,'behavior':'Disarm'},

{'material':'Aluminum','weight':2,'shape':'Elipse','color':'Grey','quality':'Normal','size':2,'temperature':2,'behavior':'Detonate'},
{'material':'Aluminum','weight':2,'shape':'Elipse','color':'Grey','quality':'New','size':3,'temperature':2,'behavior':'Disarm'},
{'material':'Aluminum','weight':2,'shape':'Round','color':'Colorful','quality':'Old','size':3,'temperature':3,'behavior':'Detonate'},
{'material':'Aluminum','weight':2,'shape':'Round','color':'Green','quality':'New','size':1,'temperature':1,'behavior':'Disarm'},
{'material':'Aluminum','weight':3,'shape':'Round','color':'Green','quality':'Old','size':2,'temperature':2,'behavior':'Detonate'},
{'material':'Aluminum','weight':3,'shape':'Round','color':'Grey','quality':'New','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Aluminum','weight':4,'shape':'Round','color':'Brown','quality':'New','size':3,'temperature':2,'behavior':'Disarm'},
{'material':'Aluminum','weight':3,'shape':'Round','color':'Black','quality':'Old','size':1,'temperature':3,'behavior':'Secure'},
{'material':'Aluminum','weight':4,'shape':'Round','color':'Grey','quality':'Normal','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Aluminum','weight':4,'shape':'Round','color':'Brown','quality':'Old','size':2,'temperature':4,'behavior':'Secure'},
{'material':'Aluminum','weight':5,'shape':'Round','color':'Grey','quality':'Normal','size':4,'temperature':2,'behavior':'Detonate'},
{'material':'Aluminum','weight':5,'shape':'Round','color':'Black','quality':'Old','size':4,'temperature':4,'behavior':'Secure'},
{'material':'Aluminum','weight':5,'shape':'Non-regular','color':'Brown','quality':'Old','size':4,'temperature':4,'behavior':'Secure'},
{'material':'Aluminum','weight':6,'shape':'Round','color':'Grey','quality':'Normal','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Aluminum','weight':6,'shape':'Round','color':'Brown','quality':'Old','size':4,'temperature':3,'behavior':'Secure'},
{'material':'Aluminum','weight':6,'shape':'Elipse','color':'Grey','quality':'Normal','size':1,'temperature':3,'behavior':'Secure'},
{'material':'Aluminum', 'weight':1 ,'shape':'Elipse','color':'Colorful','quality':'New','size':3,'temperature':2,'behavior':'Disarm'},
{'material':'Aluminum', 'weight':2 ,'shape':'Non-regular','color':'Green','quality':'Normal','size':3,'temperature':2,'behavior':'Disarm'},
{'material':'Aluminum', 'weight':2 ,'shape':'Elipse','color':'Black','quality':'Old','size':1,'temperature':2,'behavior':'Detonate'},
{'material':'Aluminum', 'weight':3 ,'shape':'Square','color':'Gold','quality':'New','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Aluminum', 'weight':3 ,'shape':'Round','color':'Brown','quality':'New','size':3,'temperature':2,'behavior':'Disarm'},
{'material':'Aluminum', 'weight':4 ,'shape':'Round','color':'Black','quality':'Old','size':4,'temperature':4,'behavior':'Secure'},
{'material':'Aluminum', 'weight':4 ,'shape':'Elipse','color':'Brown','quality':'Normal','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Aluminum', 'weight':5 ,'shape':'Square','color':'Green','quality':'Normal','size':1,'temperature':3,'behavior':'Secure'},
{'material':'Aluminum', 'weight':5 ,'shape':'Elipse','color':'Gold','quality':'Old','size':3,'temperature':4,'behavior':'Secure'},
{'material':'Aluminum', 'weight':5 ,'shape':'Round','color':'Colorful','quality':'Old','size':3,'temperature':3,'behavior':'Secure'},
{'material':'Aluminum', 'weight':6 ,'shape':'Square','color':'Brown','quality':'Normal','size':1,'temperature':3,'behavior':'Secure'},
{'material':'Aluminum', 'weight':6 ,'shape':'Round','color':'Black','quality':'New','size':4,'temperature':1,'behavior':'Disarm'},
{'material':'Aluminum', 'weight':6 ,'shape':'Non-regular','color':'Black','quality':'New','size':2,'temperature':3,'behavior':'Secure'},
{'material':'Aluminum', 'weight':4 ,'shape':'Non-regular','color':'Grey','quality':'Normal','size':1,'temperature':2,'behavior':'Disarm'},
{'material':'Aluminum', 'weight':3 ,'shape':'Elipse','color':'Grey','quality':'Normal','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Aluminum', 'weight':1 ,'shape':'Round','color':'Brown','quality':'New','size':2,'temperature':3,'behavior':'Disarm'},
{'material':'Aluminum', 'weight':1 ,'shape':'Elipse','color':'Black','quality':'Old','size':2,'temperature':3,'behavior':'Detonate'},
{'material':'Aluminum', 'weight':1 ,'shape':'Square','color':'Gold','quality':'Normal','size':1,'temperature':3,'behavior':'Detonate'},
{'material':'Aluminum', 'weight':4 ,'shape':'Round','color':'Green','quality':'Normal','size':3,'temperature':1,'behavior':'Disarm'},
{'material':'Aluminum', 'weight':3 ,'shape':'Elipse','color':'Grey','quality':'Old','size':1,'temperature':2,'behavior':'Detonate'},

{'material':'Plastic','weight':1,'shape':'Non-regular','color':'Black','quality':'New','size':2,'temperature':2,'behavior':'Detonate'},
{'material':'Plastic','weight':1,'shape':'Square','color':'Brown','quality':'New','size':2,'temperature':1,'behavior':'Disarm'},
{'material':'Plastic','weight':2,'shape':'Non-regular','color':'Brown','quality':'New','size':1,'temperature':3,'behavior':'Detonate'},
{'material':'Plastic','weight':3,'shape':'Round','color':'Gold','quality':'Old','size':3,'temperature':3,'behavior':'Detonate'},
{'material':'Plastic','weight':3,'shape':'Round','color':'Brown','quality':'Old','size':2,'temperature':3,'behavior':'Detonate'},
{'material':'Plastic','weight':3,'shape':'Round','color':'Grey','quality':'New','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Plastic','weight':3,'shape':'Square','color':'Grey','quality':'Normal','size':3,'temperature':3,'behavior':'Detonate'},
{'material':'Plastic','weight':3,'shape':'Round','color':'Black','quality':'Old','size':2,'temperature':2,'behavior':'Detonate'},
{'material':'Plastic','weight':3,'shape':'Square','color':'Grey','quality':'New','size':1,'temperature':1,'behavior':'Disarm'},
{'material':'Plastic','weight':4,'shape':'Round','color':'Grey','quality':'Old','size':1,'temperature':4,'behavior':'Secure'},
{'material':'Plastic','weight':4,'shape':'Round','color':'Grey','quality':'New','size':1,'temperature':2,'behavior':'Disarm'},
{'material':'Plastic', 'weight':1 ,'shape':'Round','color':'Colorful','quality':'New','size':2,'temperature':2,'behavior':'Detonate'},
{'material':'Plastic', 'weight':1 ,'shape':'Elipse','color':'Black','quality':'Old','size':4,'temperature':2,'behavior':'Detonate'},
{'material':'Plastic', 'weight':2 ,'shape':'Non-regular','color':'Green','quality':'Normal','size':3,'temperature':1,'behavior':'Disarm'},
{'material':'Plastic', 'weight':2 ,'shape':'Elipse','color':'Black','quality':'Old','size':1,'temperature':3,'behavior':'Detonate'},
{'material':'Plastic', 'weight':2 ,'shape':'Round','color':'Brown','quality':'Normal','size':3,'temperature':2,'behavior':'Disarm'},
{'material':'Plastic', 'weight':2 ,'shape':'Square','color':'Gold','quality':'Normal','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Plastic', 'weight':3 ,'shape':'Round','color':'Brown','quality':'New','size':3,'temperature':2,'behavior':'Disarm'},
{'material':'Plastic', 'weight':3 ,'shape':'Square','color':'Colorful','quality':'Old','size':1,'temperature':3,'behavior':'Detonate'},
{'material':'Plastic', 'weight':3 ,'shape':'Elipse','color':'Black','quality':'Normal','size':3,'temperature':3,'behavior':'Secure'},
{'material':'Plastic', 'weight':3 ,'shape':'Round','color':'Green','quality':'Normal','size':1,'temperature':2,'behavior':'Disarm'},
{'material':'Plastic', 'weight':4 ,'shape':'Elipse','color':'Grey','quality':'Old','size':3,'temperature':4,'behavior':'Secure'},
{'material':'Plastic', 'weight':4 ,'shape':'Square','color':'Brown','quality':'New','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Plastic', 'weight':4 ,'shape':'Elipse','color':'Black','quality':'Normal','size':3,'temperature':2,'behavior':'Disarm'},
{'material':'Plastic', 'weight':4 ,'shape':'Non-regular','color':'Black','quality':'Normal','size':1,'temperature':4,'behavior':'Secure'},
{'material':'Plastic', 'weight':4 ,'shape':'Square','color':'Green','quality':'New','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Plastic', 'weight':4 ,'shape':'Round','color':'Brown','quality':'Old','size':3,'temperature':2,'behavior':'Detonate'},
{'material':'Plastic', 'weight':5 ,'shape':'Elipse','color':'Gold','quality':'Normal','size':4,'temperature':3,'behavior':'Secure'},
{'material':'Plastic', 'weight':5 ,'shape':'Round','color':'Green','quality':'Old','size':1,'temperature':4,'behavior':'Secure'},
{'material':'Plastic', 'weight':5 ,'shape':'Non-regular','color':'Grey','quality':'Normal','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Plastic', 'weight':5 ,'shape':'Elipse','color':'Colorful','quality':'New','size':2,'temperature':1,'behavior':'Disarm'},
{'material':'Plastic', 'weight':5 ,'shape':'Round','color':'Gold','quality':'Normal','size':3,'temperature':2,'behavior':'Disarm'},
{'material':'Plastic', 'weight':5 ,'shape':'Square','color':'Brown','quality':'New','size':1,'temperature':3,'behavior':'Detonate'},
{'material':'Plastic', 'weight':5 ,'shape':'Round','color':'Black','quality':'Normal','size':4,'temperature':4,'behavior':'Secure'},
{'material':'Plastic', 'weight':6 ,'shape':'Round','color':'Brown','quality':'Old','size':1,'temperature':2,'behavior':'Secure'},
{'material':'Plastic', 'weight':6 ,'shape':'Non-regular','color':'Colorful','quality':'New','size':3,'temperature':4,'behavior':'Secure'},
{'material':'Plastic', 'weight':6 ,'shape':'Elipse','color':'Black','quality':'Normal','size':3,'temperature':3,'behavior':'Secure'},
{'material':'Plastic', 'weight':2 ,'shape':'Non-regular','color':'Colorful','quality':'Normal','size':3,'temperature':2,'behavior':'Disarm'},
{'material':'Plastic', 'weight':2 ,'shape':'Elipse','color':'Grey','quality':'Old','size':1,'temperature':3,'behavior':'Detonate'},
{'material':'Plastic', 'weight':3 ,'shape':'Square','color':'Browm','quality':'Normal','size':4,'temperature':1,'behavior':'Disarm'},
{'material':'Plastic', 'weight':5 ,'shape':'Round','color':'Grey','quality':'Old','size':2,'temperature':4,'behavior':'Secure'},
{'material':'Plastic', 'weight':6 ,'shape':'Elipse','color':'Blakc','quality':'Normal','size':1,'temperature':4,'behavior':'Secure'},

{'material':'Wood','weight':1,'shape':'Non-regular','color':'Green','quality':'Normal','size':1,'temperature':2,'behavior':'Disarm'},
{'material':'Wood','weight':2,'shape':'Round','color':'Green','quality':'Normal','size':1,'temperature':3,'behavior':'Detonate'},
{'material':'Wood','weight':4,'shape':'Round','color':'Brown','quality':'Old','size':2,'temperature':3,'behavior':'Detonate'},
{'material':'Wood', 'weight':1 ,'shape':'Round','color':'Brown','quality':'Old','size':3,'temperature':3,'behavior':'Detonate'},
{'material':'Wood', 'weight':1 ,'shape':'Elipse','color':'Grey','quality':'Normal','size':2,'temperature':2,'behavior':'Detonate'},
{'material':'Wood', 'weight':1 ,'shape':'Round','color':'Colorful','quality':'New','size':1,'temperature':3,'behavior':'Detonate'},
{'material':'Wood', 'weight':2 ,'shape':'Elipse','color':'Gold','quality':'Old','size':2,'temperature':2,'behavior':'Detonate'},
{'material':'Wood', 'weight':2 ,'shape':'Non-regular','color':'Grey','quality':'Normal','size':3,'temperature':2,'behavior':'Disarm'},
{'material':'Wood', 'weight':2 ,'shape':'Square','color':'Black','quality':'Normal','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Wood', 'weight':2 ,'shape':'Elipse','color':'Green','quality':'Old','size':3,'temperature':3,'behavior':'Detonate'},
{'material':'Wood', 'weight':2 ,'shape':'Non-regular','color':'Brown','quality':'Normal','size':1,'temperature':1,'behavior':'Disarm'},
{'material':'Wood', 'weight':3 ,'shape':'Square','color':'Grey','quality':'New','size':4,'temperature':1,'behavior':'Disarm'},
{'material':'Wood', 'weight':3 ,'shape':'Round','color':'Gold','quality':'Old','size':2,'temperature':3,'behavior':'Detonate'},
{'material':'Wood', 'weight':3 ,'shape':'Square','color':'Colorful','quality':'Normal','size':4,'temperature':2,'behavior':'Detonate'},
{'material':'Wood', 'weight':3 ,'shape':'Elipse','color':'Grey','quality':'New','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Wood', 'weight':3 ,'shape':'Round','color':'Black','quality':'Normal','size':3,'temperature':2,'behavior':'Disarm'},
{'material':'Wood', 'weight':3 ,'shape':'Elipse','color':'Green','quality':'Normal','size':4,'temperature':1,'behavior':'Disarm'},
{'material':'Wood', 'weight':4 ,'shape':'Square','color':'Brown','quality':'New','size':4,'temperature':4,'behavior':'Secure'},
{'material':'Wood', 'weight':4 ,'shape':'Elipse','color':'Grey','quality':'Old','size':1,'temperature':3,'behavior':'Detonate'},
{'material':'Wood', 'weight':4 ,'shape':'Non-regular','color':'Black','quality':'Normal','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Wood', 'weight':4 ,'shape':'Square','color':'Colorful','quality':'Old','size':3,'temperature':2,'behavior':'Detonate'},
{'material':'Wood', 'weight':4 ,'shape':'Round','color':'Gold','quality':'New','size':1,'temperature':1,'behavior':'Disarm'},
{'material':'Wood', 'weight':4 ,'shape':'Elipse','color':'Grey','quality':'Normal','size':1,'temperature':1,'behavior':'Disarm'},
{'material':'Wood', 'weight':5 ,'shape':'Round','color':'Green','quality':'Old','size':3,'temperature':4,'behavior':'Secure'},
{'material':'Wood', 'weight':5 ,'shape':'Square','color':'Black','quality':'Normal','size':3,'temperature':1,'behavior':'Disarm'},
{'material':'Wood', 'weight':5 ,'shape':'Elipse','color':'Green','quality':'New','size':1,'temperature':2,'behavior':'Disarm'},
{'material':'Wood', 'weight':5 ,'shape':'Round','color':'Brown','quality':'Normal','size':3,'temperature':3,'behavior':'Secure'},
{'material':'Wood', 'weight':6 ,'shape':'Elipse','color':'Green','quality':'New','size':1,'temperature':1,'behavior':'Disarm'},
{'material':'Wood', 'weight':6 ,'shape':'Elipse','color':'Geen','quality':'Old','size':4,'temperature':4,'behavior':'Secure'},
{'material':'Wood', 'weight':6 ,'shape':'Non-regular','color':'Grey','quality':'Normal','size':2,'temperature':4,'behavior':'Secure'},
{'material':'Wood', 'weight':6 ,'shape':'Elipse','color':'Black','quality':'Old','size':3,'temperature':3,'behavior':'Secure'},
{'material':'Wood', 'weight':6 ,'shape':'Round','color':'Grey','quality':'Normal','size':2,'temperature':3,'behavior':'Secure'},

{'material':'Stone', 'weight':1 ,'shape':'Elipse','color':'Black','quality':'Old','size':3,'temperature':2,'behavior':'Detonate'},
{'material':'Stone', 'weight':1 ,'shape':'Round','color':'Grey','quality':'Old','size':1,'temperature':3,'behavior':'Detonate'},
{'material':'Stone', 'weight':1 ,'shape':'Non-regular','color':'Brown','quality':'Normal','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Stone', 'weight':2 ,'shape':'Round','color':'Gold','quality':'New','size':2,'temperature':1,'behavior':'Disarm'},
{'material':'Stone', 'weight':2 ,'shape':'Elipse','color':'Colorful','quality':'Old','size':4,'temperature':2,'behavior':'Detonate'},
{'material':'Stone', 'weight':2 ,'shape':'Round','color':'Black','quality':'Normal','size':2,'temperature':1,'behavior':'Disarm'},
{'material':'Stone', 'weight':3 ,'shape':'Elipse','color':'Green','quality':'Old','size':2,'temperature':3,'behavior':'Detonate'},
{'material':'Stone', 'weight':3 ,'shape':'Non-regular','color':'Grey','quality':'Normal','size':2,'temperature':2,'behavior':'Disarm'},
{'material':'Stone', 'weight':3 ,'shape':'Elipse','color':'Brown','quality':'Normal','size':4,'temperature':2,'behavior':'Disarm'},
{'material':'Stone', 'weight':4 ,'shape':'Round','color':'Grey','quality':'Old','size':2,'temperature':2,'behavior':'Detonate'},
{'material':'Stone', 'weight':4 ,'shape':'Elipse','color':'Black','quality':'Old','size':1,'temperature':4,'behavior':'Secure'},
{'material':'Stone', 'weight':5 ,'shape':'Round','color':'Green','quality':'Nomral','size':3,'temperature':2,'behavior':'Disarm'},
{'material':'Stone', 'weight':5 ,'shape':'Elipse','color':'Grey','quality':'Old','size':2,'temperature':3,'behavior':'Secure'},
{'material':'Stone', 'weight':6 ,'shape':'Non-regular','color':'Black','quality':'Normal','size':4,'temperature':4,'behavior':'Secure'},
{'material':'Stone', 'weight':6 ,'shape':'Round','color':'Grey','quality':'New','size':1,'temperature':1,'behavior':'Disarm'},
{'material':'Stone', 'weight':6 ,'shape':'Elipse','color':'Colorful','quality':'Normal','size':3,'temperature':4,'behavior':'Secure'},
];

  var test_data = [
  	{'material':'Wood','weight':1,'shape':'Non-regular','color':'Green','quality':'Old','size':2,'temperature':3,'behavior':'Detonate'},
    {'material':'Wood','weight':2,'shape':'Non-regular','color':'Brown','quality':'Old','size':3,'temperature':2,'behavior':'Detonate'},
    {'material':'Wood','weight':2,'shape':'Round','color':'Green','quality':'Old','size':3,'temperature':3,'behavior':'Detonate'},
    {'material':'Wood','weight':3,'shape':'Square','color':'Brown','quality':'Old','size':4,'temperature':2,'behavior':'Detonate'},
    {'material':'Wood', 'weight':4 ,'shape':'Round','color':'Gold','quality':'New','size':2,'temperature':2,'behavior':'Disarm'},
    {'material':'Wood','weight':4,'shape':'Non-regular','color':'Green','quality':'Normal','size':1,'temperature':2,'behavior':'Disarm'},
    {'material':'Wood','weight':5,'shape':'Square','color':'Brown','quality':'Old','size':3,'temperature':4,'behavior':'Secure'},
    {'material':'Wood', 'weight':4 ,'shape':'Round','color':'Colorful','quality':'New','size':4,'temperature':1,'behavior':'Disarm'},
    {'material':'Wood', 'weight':5 ,'shape':'Elipse','color':'Grey','quality':'Old','size':2,'temperature':3,'behavior':'Secure'},
    {'material':'Plastic','weight':1,'shape':'Round','color':'Gold','quality':'Normal','size':3,'temperature':2,'behavior':'Detonate'},
    {'material':'Plastic','weight':2,'shape':'Round','color':'Grey','quality':'Old','size':3,'temperature':2,'behavior':'Disarm'},
    {'material':'Plastic','weight':2,'shape':'Non-regular','color':'Black','quality':'Normal','size':2,'temperature':3,'behavior':'Detonate'},
    {'material':'Plastic', 'weight':4 ,'shape':'Non-regular','color':'Black','quality':'Normal','size':2,'temperature':4,'behavior':'Secure'},
    {'material':'Plastic', 'weight':2 ,'shape':'Square','color':'Gold','quality':'Normal','size':3,'temperature':2,'behavior':'Disarm'},
    {'material':'Plastic','weight':3,'shape':'Elipse','color':'Colorful','quality':'Normal','size':2,'temperature':2,'behavior':'Disarm'},
    {'material':'Plastic','weight':4,'shape':'Round','color':'Grey','quality':'New','size':3,'temperature':2,'behavior':'Disarm'},
    {'material':'Plastic','weight':4,'shape':'Square','color':'Grey','quality':'Normal','size':3,'temperature':3,'behavior':'Secure'},
    {'material':'Plastic','weight':5,'shape':'Square','color':'Brown','quality':'Normal','size':3,'temperature':4,'behavior':'Secure'},
    {'material':'Plastic', 'weight':6 ,'shape':'Elipse','color':'Green','quality':'New','size':2,'temperature':2,'behavior':'Disarm'},
    {'material':'Plastic', 'weight':3 ,'shape':'Non-regular','color':'Black','quality':'Old','size':1,'temperature':3,'behavior':'Detonate'},
    {'material':'Metal','weight':1,'shape':'Round','color':'Grey','quality':'Old','size':3,'temperature':3,'behavior':'Detonate'},
    {'material':'Metal','weight':2,'shape':'Square','color':'Grey','quality':'Old','size':2,'temperature':3,'behavior':'Detonate'},
    {'material':'Metal','weight':5,'shape':'Round','color':'Grey','quality':'Old','size':4,'temperature':3,'behavior':'Secure'},
    {'material':'Metal','weight':3,'shape':'Round','color':'Black','quality':'Old','size':3,'temperature':2,'behavior':'Disarm'},
    {'material':'Metal','weight':4,'shape':'Square','color':'Grey','quality':'Normal','size':3,'temperature':2,'behavior':'Disarm'},
    {'material':'Metal','weight':4,'shape':'Elipse','color':'Grey','quality':'Normal','size':1,'temperature':1,'behavior':'Disarm'},
    {'material':'Metal','weight':4,'shape':'Square','color':'Grey','quality':'Old','size':1,'temperature':3,'behavior':'Detonate'},
    {'material':'Metal','weight':5,'shape':'Round','color':'Brown','quality':'Old','size':2,'temperature':3,'behavior':'Secure'},
    {'material':'Metal','weight':6,'shape':'Round','color':'Grey','quality':'Old','size':1,'temperature':4,'behavior':'Secure'},
    {'material':'Metal', 'weight':4 ,'shape':'Elipse','color':'Gold','quality':'Normal','size':2,'temperature':2,'behavior':'Disarm'},
    {'material':'Metal', 'weight':6 ,'shape':'Round','color':'Grey','quality':'New','size':4,'temperature':4,'behavior':'Secure'},
    {'material':'Metal', 'weight':3 ,'shape':'Square','color':'Colorful','quality':'Normal','size':3,'temperature':2,'behavior':'Disarm'},
    {'material':'Aluminum','weight':1,'shape':'Elipse','color':'Gold','quality':'Old','size':3,'temperature':3,'behavior':'Detonate'},
    {'material':'Aluminum','weight':2,'shape':'Non-regular','color':'Colorful','quality':'Old','size':3,'temperature':2,'behavior':'Detonate'},
    {'material':'Aluminum', 'weight':6 ,'shape':'Round','color':'Black','quality':'New','size':2,'temperature':2,'behavior':'Disarm'},
    {'material':'Aluminum','weight':3,'shape':'Round','color':'Grey','quality':'Old','size':1,'temperature':3,'behavior':'Detonate'},
    {'material':'Aluminum','weight':4,'shape':'Square','color':'Brown','quality':'Old','size':4,'temperature':4,'behavior':'Secure'},
    {'material':'Aluminum','weight':5,'shape':'Round','color':'Browm','quality':'Normal','size':2,'temperature':2,'behavior':'Disarm'},
    {'material':'Aluminum', 'weight':5 ,'shape':'Elipse','color':'Gold','quality':'Old','size':3,'temperature':4,'behavior':'Secure'},
    {'material':'Aluminum', 'weight':4 ,'shape':'Elipse','color':'Brown','quality':'Old','size':3,'temperature':3,'behavior':'Detonate'},
    {'material':'Aluminum', 'weight':5 ,'shape':'Non-regular','color':'Green','quality':'Normal','size':2,'temperature':4,'behavior':'Secure'},
    {'material':'Aluminum', 'weight':1 ,'shape':'Square','color':'Gold','quality':'Old','size':1,'temperature':3,'behavior':'Detonate'},
    {'material':'Stone','weight':1,'shape':'Round','color':'Grey','quality':'Old','size':3,'temperature':2,'behavior':'Detonate'},
    {'material':'Stone','weight':2,'shape':'Elipse','color':'Brown','quality':'Old','size':3,'temperature':2,'behavior':'Detonate'},
    {'material':'Stone','weight':4,'shape':'Elipse','color':'Black','quality':'Old','size':1,'temperature':3,'behavior':'Secure'},
    {'material':'Stone','weight':6,'shape':'Elipse','color':'Grey','quality':'Old','size':3,'temperature':4,'behavior':'Secure'},
    {'material':'Stone', 'weight':4 ,'shape':'Round','color':'Grey','quality':'Old','size':2,'temperature':2,'behavior':'Detonate'},
    {'material':'Stone', 'weight':5 ,'shape':'Round','color':'Green','quality':'Normal','size':3,'temperature':1,'behavior':'Disarm'},
    {'material':'Stone', 'weight':3 ,'shape':'Elipse','color':'Black','quality':'New','size':1,'temperature':3,'behavior':'Detonate'},
    {'material':'Stone', 'weight':6 ,'shape':'Round','color':'Grey','quality':'Normal','size':2,'temperature':4,'behavior':'Secure'},


  ];

  var class_name = 'behavior';
  var features = ['material','weight','shape','color','quality','size','temperature'];

  var dt = new DecisionTree(training_data, class_name, features);

  const set = mnist.set(20); // Przypisujemy zmiennej set randomowe obrazy, odpowiednio 20 dla treningu

  const trainingSet = set.training;
  const testSet = mnist[0].set(1, 5); // Ustawia rangę, od 1 do 5, czyli 5 obrazków dla testu

  // create the layers 
  const Layer = synaptic.Layer;
  const Network = synaptic.Network;
  const Trainer = synaptic.Trainer;

  const inputLayer = new Layer(2500); // Nasz input -> 2500 = 50 * 50 (nasze obrazy są rozmiaru 50x50)
  const hiddenLayer = new Layer(20);
  const outputLayer = new Layer(10); // 10 ponieważ mamy 10 wyjść, od 0 do 9. Gdzie 0 to bomby, a reszta nie

  // connect the layers 
  inputLayer.project(hiddenLayer);
  hiddenLayer.project(outputLayer);

  const myNetwork = new Network({
      
      // set the layers 
      input: inputLayer,
      hidden: [hiddenLayer],
      output: outputLayer
  });

  const trainer = new Trainer(myNetwork);

$(document).ready(function() {
  var testModel;
          testModel = id3(saper_examples,'isBomb',saper_features);
        //drawGraph(testModel,'canvas');
        //renderSamples(saper_samples,$("#samples"),testModel,'isBomb',saper_features);
        //renderTrainingData(saper_examples,$("#training"),'isBomb',saper_features);
        $("#percentage").append(calcError( saper_samples, testModel, 'isBomb' ));
  $("#decision-tree").click(function(e){
        e.preventDefault();

        //console.log(calcError( saper_samples, testModel, 'isBomb' ));
  });  

  $("#start").click(() => {


  // utworzenie planszy
  var gridSize = 10;
  var grid = [];

  for (var i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (var j = 0; j < gridSize; j++) {
      grid[i][j] = 'Empty';
    }
  }
  var originalAttributes = $("#tmp").attr('style');

  var resetSaper = function() {
   // Reset from original
    $("#tmp").attr('style',originalAttributes);
    $("#tmp").empty();

  };

  resetSaper();
  
  var boardSize = (420 / gridSize) - 4;
  var box = document.querySelector('#row_wrapper');
  //czyści poprzednią plansze
  box.innerHTML = '';

  for (var boardX = 0; boardX < gridSize; boardX++) {
    for (var boardY = 0; boardY < gridSize; boardY++) {
      var boxEle = document.createElement('div');
      boxEle.id = boardX + ":" + boardY;
      boxEle.style.width = boardSize + "px";
      boxEle.style.height = boardSize + "px";
      boxEle.style.border = "2px solid black";
      box.appendChild(boxEle);
    }
  }
  // Start location will be in the following format:
  // [distanceFromTop, distanceFromLeft]
  var findShortestPath = function(startCoordinates, grid) {
    var distanceFromTop = startCoordinates[0];
    var distanceFromLeft = startCoordinates[1];


    // Each "location" will store its coordinates
    // and the shortest path required to arrive there
    var location = {
      distanceFromTop: distanceFromTop,
      distanceFromLeft: distanceFromLeft,
      path: [],
      status: 'Start'
    };

    // Initialize the queue with the start location already inside
    var queue = [location];

    // Loop through the grid searching for the goal
    while (queue.length > 0) {
      // Take the first location off the queue
      var currentLocation = queue.shift();

      // Explore North
      var newLocation = exploreInDirection(currentLocation, 'Up', grid);
      if (newLocation.status === 'Goal') {
        return newLocation.path;
      } else if (newLocation.status === ('Valid'|| 'Empty')) {
        queue.push(newLocation);
      }

      // Explore East
      var newLocation = exploreInDirection(currentLocation, 'Right', grid);
      if (newLocation.status === 'Goal') {
        return newLocation.path;
      } else if (newLocation.status === ('Valid'|| 'Empty')) {
        queue.push(newLocation);
      }

      // Explore South
      var newLocation = exploreInDirection(currentLocation, 'Down', grid);
      if (newLocation.status === 'Goal') {
        return newLocation.path;
      } else if (newLocation.status === ('Valid'|| 'Empty')) {
        queue.push(newLocation);
      }

      // Explore West
      var newLocation = exploreInDirection(currentLocation, 'Left', grid);
      if (newLocation.status === 'Goal') {
        return newLocation.path;
      } else if (newLocation.status === ('Valid'|| 'Empty')) {
        queue.push(newLocation);
      }
    }

    // No valid path found
    return false;

  };
  var count = 0;
  // This function will check a location's status
  // (a location is "valid" if it is on the grid, is not an "obstacle",
  // and has not yet been visited by our algorithm)
  // Returns "Valid", "Invalid", "Blocked", or "Goal"
  var locationStatus = function(location, grid) {
    count += 1;
    var gridSize = grid.length;
    var dft = location.distanceFromTop;
    var dfl = location.distanceFromLeft;

    if (location.distanceFromLeft < 0 ||
        location.distanceFromLeft >= gridSize ||
        location.distanceFromTop < 0 ||
        location.distanceFromTop >= gridSize) {

      // location is not on the grid--return false
      return 'Invalid';
    } else if (grid[dft][dfl] === 'Goal') {
      return 'Goal';
    } else if (grid[dft][dfl] !== 'Empty') {
      // location is either an obstacle or has been visited
      return 'Blocked';
    } else {
      return 'Valid';
    }
  };


  // Explores the grid from the given location in the given
  // direction
  var exploreInDirection = function(currentLocation, direction, grid) {
    var newPath = currentLocation.path.slice();
    newPath.push(direction);

    var dft = currentLocation.distanceFromTop;
    var dfl = currentLocation.distanceFromLeft;

    if (direction === 'Up') {
      dft -= 1;
    } else if (direction === 'Right') {
      dfl += 1;
    } else if (direction === 'Down') {
      dft += 1;
    } else if (direction === 'Left') {
      dfl -= 1;
    }

    var newLocation = {
      distanceFromTop: dft,
      distanceFromLeft: dfl,
      path: newPath,
      status: 'Unknown'
    };
    newLocation.status = locationStatus(newLocation, grid);

    // If this new location is valid, mark it as 'Visited'
    if (newLocation.status === 'Valid') {
      grid[newLocation.distanceFromTop][newLocation.distanceFromLeft] = 'Valid';
    }

    return newLocation;
  };

  // utworzenie sapera
  var createSaper = function() {
    var saper = document.createElement("IMG");
    saper.id = "saper";
    saper.src = "saper.jpg";
    saper.style.width = boardSize + "px";
    saper.style.height = boardSize + "px";
    saper.style.border = "2px solid black";
    saper.style.position = "absolute";
    document.getElementById("tmp").appendChild(saper);
  };

  // funkcja generująca randomową liczbę
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



  // generowanie bomb w randomowych miejscach
  var bombAmount = 3;
  var bomb = [];

  var bombArrayForTree = [];
  for( var i = 0; i<bombAmount; i++){
    bombArrayForTree.push({x:-1,y:-1,bombObject:bombs_examples[getRandomInt(0,25)]});    
  }
  
  var generateBomb = function() {
  var bombX;
  var bombY;
    for (var bombI = 0; bombI < bombAmount; bombI++) {
      bombX = getRandomInt(1, gridSize - 1);
      bombY = getRandomInt(1, gridSize - 1);
      
      if (grid[bombX][bombY] === "Goal") {
        bombI--;
      } else {
        bomb[bombI] = [bombX, bombY];
        grid[bombX][bombY] = "Goal";
        document.getElementById(bombX + ":" + bombY).style.backgroundColor = "green";
        //Dodanie pozycji bomb w tablicy bomb dla drzewa
        bombArrayForTree[bombI].x = bombX;
        bombArrayForTree[bombI].y = bombY;
        //console.log("Goal at X:" + bombX + " Y:" + bombY);

      }
    }
  };

  // generowanie przeszkód w randomowych miejscach
  var obstacleAmount = 3;
  var generateObstacle = function() {
  var obstacleX;
  var obstacleY;
    for (var obstacleI = 0; obstacleI < obstacleAmount; obstacleI++) {
      obstacleX = getRandomInt(1, gridSize - 1);
      obstacleY = getRandomInt(1, gridSize - 1);

      if (grid[obstacleX][obstacleY] === "Obstacle") {
        obstacleI--;
      } else if (grid[obstacleX][obstacleY] === "Goal") {
        obstacleI--;
      } else {
        grid[obstacleX][obstacleY] = "Obstacle";
        document.getElementById(obstacleX + ":" + obstacleY).style.backgroundColor = "red";
      }
    }
  };

    // mechanika poruszania się saperem
  var moving = function(direction) {
    var tmp = boardSize + 4;
    var turn = "-=" + tmp + "px";
    //console.log("Moving "+direction);
    var speed = 50;
      if (direction == "Down") {
        $(saper).delay(speed).animate({
          bottom: turn
        }, 100);
      } else if (direction == "Up") {
        $(saper).delay(speed).animate({
          top: turn
        }, 100);
      } else if (direction == "Right") {
        $(saper).delay(speed).animate({
          right: turn
        }, 100);
      } else if (direction == "Left") {
        $(saper).delay(speed).animate({
          left: turn
        }, 100);
      }
  };

  var moving_test=function(){
    var x=actualX;
    var y=actualY;
    for(tmp=0; tmp<bombPath.length; tmp++){
      if(bombPath[tmp]=="Up"){
        x=x-1;
        document.getElementById(x+":"+y).style.backgroundColor="orange";
        console.log(x+":"+y);
      }
      else if(bombPath[tmp]=="Down"){
        x=x+1;
        document.getElementById(x+":"+y).style.backgroundColor="orange";
        console.log(x+":"+y);
      }
      else if(bombPath[tmp]=="Left"){
        y=y-1;
        document.getElementById(x+":"+y).style.backgroundColor="orange";
        console.log(x+":"+y);
      }
      else if(bombPath[tmp]=="Right"){
        y=y+1;
        document.getElementById(x+":"+y).style.backgroundColor="orange";
        console.log(x+":"+y);
      }
    }
  };


  createSaper();
  generateBomb();
  generateObstacle();

  var actualX=0;
  var actualY=0;

  for (var index = 0; index < bombAmount; index++) {
    var bombPath = findShortestPath([actualX,actualY], grid);

    for(i = 0; i<bombPath.length; i++){
      if(bombPath[i]=="Down"){
        actualX=actualX+1;
      }
      else if(bombPath[i]=="Up"){
        actualX=actualX-1;
      }
      else if(bombPath[i]=="Right"){
        actualY=actualY+1;
      }
      else if(bombPath[i]=="Left"){
        actualY=actualY-1;
      }
      moving(bombPath[i]);
    }

    console.log(bombPath);
    console.log(bombArrayForTree[index].bombObject);
    console.log('Predykcja:'+ predict( testModel, bombArrayForTree[index].bombObject));

    if(predict( testModel, bombArrayForTree[index].bombObject)=="Yes"){
      var bomb={
        'material':bombArrayForTree[index].bombObject.material,
        'weight':bombArrayForTree[index].bombObject.weight,
        'shape':bombArrayForTree[index].bombObject.shape,
        'color':bombArrayForTree[index].bombObject.color,
        'quality':bombArrayForTree[index].bombObject.quality,
        'size':bombArrayForTree[index].bombObject.size,
        'temperature':bombArrayForTree[index].bombObject.temperature
      }
      console.log('Predykcja zachowania: '+ dt.predict(bomb));
      trainer.train(trainingSet, {
        rate: .2, // szybkość uczenia się
        iterations: 50, // ilość iteracji
        error: .1, // najniższy prób błędu
        shuffle: true, // czy nasz zestaw treningowy ma być wybierany losowo
        log: 1, // wyświetlanie po kolei iteracji w console
        cost: Trainer.cost.CROSS_ENTROPY
      });

      console.log("------------------------------------");

      var output = myNetwork.activate(testSet[0].input);
      console.log(output);
      console.log("------------------------------------");

      var maximum = output.reduce(function(p,c) { return p > c ? p : c; });
      var nominators = output.map(function(e) { return Math.exp(e - maximum); });
      var denominator = nominators.reduce(function (p, c) { return p + c; });
      var softmax = nominators.map(function(e) { return e / denominator; });

      var maxIndex = 0;
      softmax.reduce(function(p, c, i){if (p < c) {maxIndex = i; return c;} else return p;});

      var result = [];

      for (var i = 0; i < output.length; i++)
      {
          if (i == maxIndex)
              result.push(1);
          else
              result.push(0);
      }

      console.log(result);
      console.log("------------------------------------");
      console.log("testSet[0].output");
      console.log("------------------------------------");
      console.log(testSet[0].output);
      console.log("------------------------------------");

      var nnDigit = 0;

      for (var i = 0; i <= 9; i++)
      {
          if (result[i] == 1)
          {
              nnDigit = i;
              break;
          }
      }

      var testDigit = 0;

      for (var i = 0; i <= 9; i++)
      {
          if (testSet[0].output[i] == 1)
          {
              testDigit = i;
              break;
          }
      }

      if(nnDigit > 0) {
        console.log("Results:");
        console.log("------------------------------------");
        console.log("The neural network believed it wasn't a bomb");
        console.log("------------------------------------");
      } else {
        console.log("Results:");
        console.log("------------------------------------");
        console.log("The neural network believed it was a bomb");
        console.log("------------------------------------");
      }
    }
    grid[actualX][actualY]='Valid';
    //console.log(grid[bomb[index][0]][bomb[index][1]] );
  }
  //console.log(count);

  // zastosowanie algorytmu i przypisanie do zmiennej bombPath
  });

});