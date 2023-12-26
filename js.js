let best_loc_1_row = ''
        let best_loc_2_row = ''
        let best_loc_3_row = ''
        let best_loc_1_column = ''
        let best_loc_2_column = ''
        let best_loc_3_column = ''
        let best_loc_1_main = ''
        let best_loc_2_main = ''
        let best_loc_3_main = ''
        let best_loc_1_second = ''
        let best_loc_2_second = ''
        let best_loc_3_second = ''
        let best_loc = ''
      
        let rand =''
        let flag = 0 
        let count = 0
        let winner = ''
        let arr_winner = []
        let arr = []
        let boxs = document.querySelectorAll('.box')
        let _2by2 = document.getElementById('2by2')
        let _AI_easy = document.getElementById('AI_easy')
        let _AI_hard = document.getElementById('AI_hard')
        let typegame = document.getElementById('typegame')
        let startbtn = document.getElementById('start')
        let info = document.getElementById('info')
        let pm = document.getElementById('pm')
        startbtn.addEventListener('click',()=>{
            typegame.classList.remove('animate__animated', 'animate__backInLeft');
            typegame.classList.add('animate__animated', 'animate__backOutRight');
        })


        function fill_arr(){
            arr = []
            boxs.forEach((val)=>{
                arr.push(val.innerHTML)
            })
        }
        function calculate_count(){
            count = 0
            boxs.forEach((v)=>{
                if(v.innerHTML!=''){
                    count++
                }
            })
        }

        // ********2by2 mode***************
        _2by2.addEventListener('click',()=>{
            boxs.forEach((val)=>{
                val.setAttribute('data-status','off')
            })
            boxs.forEach((val)=>{
                val.addEventListener('click',()=>{
                    arr = []
                    count++
                    if(winner==''){
                        if(val.getAttribute('data-status')=='off' ){
                            if(flag==0){
                                val.innerHTML = 'X'
                                flag = 1
                            }
                            else{
                                val.innerHTML = 'O'
                                flag = 0
                            }
                            val.setAttribute('data-status','on')
                            fill_arr()
                            check()
                        }
                    }
                })
            })
        })

        // *********AI mode easy******************
  

        _AI_easy.addEventListener('click',()=>{
            boxs.forEach((val)=>{
                val.setAttribute('data-status','off')
            })
            boxs.forEach((val)=>{
                val.addEventListener('click',()=>{
                    arr = []
                    
                    if(winner==''){
                        if(val.getAttribute('data-status')=='off' ){
                           
                            val.innerHTML = 'X'
                            val.setAttribute('data-status','on')
                            fill_arr()
                            check()
                        }
                    }
                    if(winner==''){
                        find_random()
                        
                        boxs[best_loc].innerHTML = 'O'
                        boxs[best_loc].setAttribute('data-status','on')
                        fill_arr()
                        check()
                        
                    }
                    
                })
            })

        })
        // **********AI hard mode********************
        function row_near_to_win_for_cp(){
          
            let i=0
            let k = 0
            let empty = ''
            let countt_fill_O = 0
            let countt_fill_X = 0
            let countt_empty = 0
            fill_arr()
            for(let j=0;j<3;j++){
                k=0
                for(let z=0;z<3;z++){
                    if(arr[k+i]=='O'){
                        countt_fill_O++
                    }
                    else if(arr[k+i]=='X'){
                        countt_fill_X++
                    }
                    else if(arr[k+i]==''){
                        countt_empty++
                        empty = k+i
                    }
                    k++
                }
                if((countt_fill_O==2) && (countt_empty==1)){
                    best_loc_1_row = empty
                    
                }else if((countt_fill_X==2) && (countt_empty==1)){
                    best_loc_2_row = empty
                    
                }else if((countt_fill_O==1) && (countt_empty==2)){
                    best_loc_3_row = empty
                }
                
                // if(best_loc_1_column!='' && best_loc_2_column!=''&& best_loc_3_column!=''){
                //     break;
                // }
                countt_fill_O = 0
                countt_fill_X = 0
                countt_empty = 0
                empty =''
                i+=3
            }
        }
        function column_near_to_win_for_cp(){
            let i=0
            let k = 0
            let empty = ''
            let countt_fill_O = 0
            let countt_fill_X = 0
            let countt_empty = 0
            fill_arr()
            for(let j=0;j<3;j++){
                k=0
                for(let z=0;z<3;z++){
                    if(arr[k+i]=='O'){
                        countt_fill_O++
                    }
                    else if(arr[k+i]=='X'){
                        countt_fill_X++
                    }
                    else if(arr[k+i]==''){
                        countt_empty++
                        empty = k+i
                    }
                    k+=3
                }
                if((countt_fill_O==2) && (countt_empty==1)){
                    best_loc_1_column = empty
                    
                }else if((countt_fill_X==2) && (countt_empty==1)){
                    best_loc_2_column = empty
                    console.log("column x dare por mishe");
                    
                }else if((countt_fill_O==1) && (countt_empty==2)){
                    best_loc_3_column = empty
                    
                }
                // if(best_loc_1_column!='' && best_loc_2_column!=''&& best_loc_3_column!=''){
                //     break;
                // }
                console.log(best_loc_2_column);
               
                countt_fill_O= 0
                countt_fill_X= 0
                countt_empty = 0
                empty =''
                i+=1
            }
        }
        function main_diameter_near_to_win_for_cp(){
            let k = 0
            let empty = ''
            let countt_fill_O = 0
            let countt_fill_X = 0
            let countt_empty = 0
            fill_arr()
            for(let j=0;j<3;j++){
                if(arr[k]=='O'){
                    countt_fill_O++
                }
                else if(arr[k]=='X'){
                    countt_fill_X++
                }
                else if(arr[k]==''){
                    countt_empty++
                    empty = k
                }
                k+=4
            }
            if((countt_fill_O==2) && (countt_empty==1)){
                best_loc_1_main = empty
            }else if((countt_fill_X==2) && (countt_empty==1)){
                best_loc_2_main = empty
            }else if((countt_fill_O==1) && (countt_empty==2)){
                best_loc_3_main = empty
            }
            
            countt_fill_O= 0
            countt_fill_X= 0
            countt_empty = 0
            empty =''
          
            
        }
        function second_diameter_near_to_win_for_cp(){
            let k = 2
            let empty = ''
            let countt_fill_O = 0
            let countt_fill_X = 0
            let countt_empty = 0
            fill_arr()
            for(let j=0;j<3;j++){
                if(arr[k]=='O'){
                    countt_fill_O++
                }
                else if(arr[k]=='X'){
                    countt_fill_X++
                }
                else if(arr[k]==''){
                    countt_empty++
                    empty = k
                }
                k+=2
            }
            if((countt_fill_O==2) && (countt_empty==1)){
                best_loc_1_second = empty
            }else if((countt_fill_X==2) && (countt_empty==1)){
                best_loc_2_second = empty
            }else if((countt_fill_O==1) && (countt_empty==2)){
                best_loc_3_second = empty
            }
            countt_fill_O= 0
            countt_fill_X= 0
            countt_empty = 0
            empty =''
          
            
        }



        function find_best_box_for_cp(){
            fill_arr()
            let empty_boxs = []
            let cp_boxs = []
            boxs.forEach((val , i)=>{
                if(val.innerHTML==''){
                    empty_boxs.push(i)
                }
            })
            boxs.forEach((val , j)=>{
                if(val.innerHTML=='O'){
                    cp_boxs.push(j)
                }
            })
            
            
            row_near_to_win_for_cp()
            column_near_to_win_for_cp()
            main_diameter_near_to_win_for_cp()
            second_diameter_near_to_win_for_cp()
            if(best_loc_1_row!=''){
                best_loc = best_loc_1_row
                console.log('best_loc_1_row');
            }else if(best_loc_1_column!=''){
                best_loc = best_loc_1_column
                console.log('best_loc_1_column');
            }else if(best_loc_1_main!=''){
                best_loc = best_loc_1_main
                console.log('best_loc_1_main');
            }else if(best_loc_1_second!=''){
                best_loc = best_loc_1_second
                console.log('best_loc_1_second');
            }else if(best_loc_2_row!='' || best_loc_2_row=='0'){
                best_loc = String(best_loc_2_row)
                console.log('best_loc_2_row');
            }else if(best_loc_2_column!='' || best_loc_2_column=='0'){
                best_loc = String(best_loc_2_column)
                console.log('best_loc_2_column');
            }else if(best_loc_2_main!='' || best_loc_2_main=='0'){
                best_loc = String(best_loc_2_main)
                console.log('best_loc_2_main');
            }else if(best_loc_2_second!='' || best_loc_2_second=='0'){
                best_loc = String(best_loc_2_second)
                console.log('best_loc_2_second');
            }else if(best_loc_3_row!=''){
                best_loc = best_loc_3_row
                console.log('best_loc_3_row');
            }else if(best_loc_3_column!=''){
                best_loc = best_loc_3_column
                console.log('best_loc_3_column');
            }else if(best_loc_3_main!=''){
                best_loc = best_loc_3_main
                console.log('best_loc_3_main');
            }else if(best_loc_3_second!=''){
                best_loc = best_loc_3_second
                console.log('best_loc_3_second');
            }
           
    
            if(best_loc == ''){
                find_random()
                console.log('rand');
            }
        }

        function find_random(){
            rand = Math.floor(Math.random()*8)
            while(boxs[rand].getAttribute('data-status')!='off'){
                rand = Math.floor(Math.random()*8)
            }
            if(arr[rand]!=''){
                while(arr[rand]!=''){
                    rand = Math.floor(Math.random()*8)
                }
            }
            best_loc = rand
        }

        _AI_hard.addEventListener('click',()=>{
            info.style.display = 'flex'
            // setTimeout(() => {
            //     info.style.display = 'none' 
            // }, 700);
            boxs.forEach((val)=>{
                val.setAttribute('data-status','off')
            })
            boxs.forEach((val)=>{
                val.addEventListener('click',()=>{
                    arr = []
                    
                    if(winner==''){
                        if(val.getAttribute('data-status')=='off' ){
                           
                            val.innerHTML = 'X'
                            val.setAttribute('data-status','on')
                            fill_arr()
                            check()
                        }
                    }
                    calculate_count()
                    console.log(count);
                    if(winner=='' && count<9){
                        find_best_box_for_cp()
                        boxs[best_loc].innerHTML = 'O'
                        boxs[best_loc].setAttribute('data-status','on')
                        fill_arr()
                        check()
                        best_loc_1_row = ''
                        best_loc_2_row = ''
                        best_loc_3_row = ''
                        best_loc_1_column = ''
                        best_loc_2_column = ''
                        best_loc_3_column = ''
                        best_loc_1_main = ''
                        best_loc_2_main = ''
                        best_loc_3_main = ''
                        best_loc_1_second = ''
                        best_loc_2_second = ''
                        best_loc_3_second = ''
                        best_loc = ''
                        }
                })
            })
        })
       
        //    general  functions
        function check_rows(){
            let i=0
            for(let j=0;j<3;j++){
                if(arr[i]!="" && (arr[i]==arr[i+1]&&arr[i+1]==arr[i+2])){
                    winner = arr[i]
                    arr_winner.push(i)
                    arr_winner.push(i+1)
                    arr_winner.push(i+2)
                    break;
                }
                i+=3
            }
        }
        function check_columns(){
            let i=0
            for(let j=0;j<3;j++){
                if(arr[i]!="" && (arr[i]==arr[i+3]&&arr[i+3]==arr[i+6])){
                    winner = arr[i]
                    arr_winner.push(i)
                    arr_winner.push(i+3)
                    arr_winner.push(i+6)
                    break;
                }
                i+=1
            }
        }
        function check_main_Diameter(){
            let i = 0
            if(arr[i]!="" && (arr[i]==arr[i+4]&&arr[i+4]==arr[i+8])){
                winner = arr[i]
                arr_winner.push(i)
                arr_winner.push(i+4)
                arr_winner.push(i+8)
                
            }            
        }
        function check_second_Diameter(){
            let i = 2
            if(arr[i]!="" && (arr[i]==arr[i+2]&&arr[i+2]==arr[i+4])){
                winner = arr[i]
                arr_winner.push(i)
                arr_winner.push(i+2)
                arr_winner.push(i+4)
            }            
        }
        function check(){
            check_rows()
            check_columns()
            check_main_Diameter()
            check_second_Diameter()
            if(winner!=''){
                show_result()
                setTimeout(() => {
                    pm.style.display= 'flex'
                    pm.innerHTML = 'Congratulation 👏🏻 ...'+" winner is "+ winner 
                    
                }, 1000);
                
            }
            else{
                calculate_count()
                if(count==9){
                    setTimeout(() => {
                        pm.style.display= 'flex'
                        pm.innerHTML = 'Equal ....🙂'
                    }, 1000);
                    
                }
               
                
            }
        }
        function show_result(){
            arr_winner.forEach((val)=>{
                boxs[val].style.background = 'green'
            })
        }