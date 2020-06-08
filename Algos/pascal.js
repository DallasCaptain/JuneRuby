        //0      1
        //1     1 1
        //2    1 2 1
        //3   1 3 3 1
        //4  1 4 6 4 1

        // pascal(4) => [1,4,6,4,1]



        function pascal(row, crow = [1,1]){
            if (row == 0){
                return [1]
            }
            if (row == 1){
                return crow
            }
            nrow = [1]
            for (i = 1; i < crow.length; i++){
                nrow.push(crow[i]+crow[i-1])
            }
            nrow.push(1)

            return pascal(row-1, nrow)
        }

        console.log(pascal(25))