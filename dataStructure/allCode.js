var code292 = function (n) {
    console.log("Today is a nice day".split(" "));
    return n % 4 !== 0;
}

var code58 = (s) => {
    // let tmp = s.split(' ');
    // let i = tmp.length - 1;
    // while (i > 0) {
    //     console.log(tmp[i].charCodeAt());
    //     if (tmp[i].length > 0 && tmp[i] !== " ") {
    //         return tmp[i].length;
    //     }
    //     i--;
    // }
    // return 0;
    s = s.trim();
    var lastIndex = s.lastIndexOf(' ') + 1;
    return s.length - lastIndex;
};

var code434 = (s) => {
    return s.trim().split(/\s+/).length;
};

var code541 = (s, k) => {
    let result = "";
    let rate = 2 * k;

    if (s.length < k) {
        for (let j = s.length - 1; j >= 0; j--) {
            result += s[j];
        }
        return result;
    } else if (s.length < rate) {
        let innerTmp = s.substring(0, k);
        for (let j = k - 1; j >= 0; j--) {
            result += innerTmp[j];
        }
        result += s.substring(k);
        return result
    }

    for (let i = 0; i < s.length; i += rate) {
        let tmp = s.substring(i, i + rate);
        if (tmp.length < k) {
            for (let j = tmp.length - 1; j >= 0; j--) {
                result += tmp[j];
            }
            continue;
        } else if (tmp.length < rate) {
            let innerTmp = tmp.substring(0, k);
            for (let j = k - 1; j >= 0; j--) {
                result += innerTmp[j];
            }
            result += tmp.substring(k);
        } else if (tmp.length === rate) {
            let innerTmp = tmp.substring(0, k);
            for (let j = k - 1; j >= 0; j--) {
                result += innerTmp[j];
            }
            result += tmp.substring(k);
        }
    }
    return result;
};
var code345 = (s) => {
    let result = s.split("");
    let map = { a: true, e: true, i: true, o: true, u: true }
    let tmp = '';
    for (let start = 0, end = result.length - 1; start < end;) {
        if (map[result[start].toLowerCase()]) {
            console.log("result[start]=", result[start], "result[end]=", result[end]);
            if (map[result[end].toLowerCase()]) {
                console.log("change result[start]=%s and result[end]=%s", result[start], result[end]);
                tmp = result[start];
                result[start] = result[end];
                result[end] = tmp;
                start++;
                // end--;
            }
            end--;
        } else {
            start++;
        }
    }
    return result.join("");
};

var code1 = (nums, target) => {
    let tmp = {};
    let returnVal = [];
    for (var i = 0; i < nums.length; i++) {
        let element = nums[i];
        let tmpInt = target - element;
        if (tmp[tmpInt] !== undefined) {
            return [tmp[tmpInt], i];
        }
        tmp[element] = i;
    }


};

var code1_2 = (nums, target) => {
    let map=[];
    nums.forEach((val,ind)=>{
        let tmp={index:ind,value:val};
        map.push(tmp);
    });
    map.sort((a,b)=> {
        console.log(a,b);
        return a['value']-b['value'];
    });
    
    for (let i = 0, j = map.length - 1; i < j;) {
        let sum = map[i]['value'] + map[j]['value'];
        if (sum === target) {
            return [map[i]['index'], map[j]['index']];
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
};

var code15 = (nums) => {
    let map = [];
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            for (let k = 2; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    map[index++] = [nums[i], nums[j], nums[k]];
                }
            }
        }
    }
    return map;
};



// console.log(code15([-1, 0, 1, 2, -1, -4]));
console.log(code1_2([3,3], 6));
// console.log(code58("a "));
// console.log(code434("Of all the gin joints in all the towns in all the world,   "));
// console.log(code541("nmcauqjhnavcckbxetgiovrqmwzwpuadbykrxliduaqrpjyfxjxwsxnhsuisjeuxgonvnfvbruevticwnfnnbnnbvgsfxycsixlbegpkmwkeahndcruwmsigqaolitcxabjhowfrkbjqxctpvcxtoehxipzbkhorethhtjilzhdnlkwjwwxtolshrgbxtmtbfgiymwcpbgovrgfkouxempdqhkqgfodujzblzmnnfraridpdhhvlwecbgqjtkouxvtgcisccgwdyxqrtjrsxubputvcqtbvbcuhlwlihpjhrxbawfxcqokudvkgaiqgbtqlhxfeymqffngpwelztururvuhjnzylqlogexbxxvtqrcdqabxvdnviohjygfwebrmvaijeyaluqgyrtrrxrwaxoqvulqdtxyvyncudxmvqnppyopqasimvmzzrkdwjngrzlacejafzfcvthahhrheeeqjklkjjgntjvfimaeeoicfoaiockmvawfcwsafrzqgspezqjwqwhotgsbhnfvxtewqoaecwgpjkilxsxadoxyhksdiyzxnjzjapcczymffvstkbnirujftqccwygwaaimjfnalabntmkqvorwymejghztyljmnduauobltgsbfmbnycbjusxemxsopgqoypmeuwhqcqhiawmdyupqvceqiluutiokxfvddjxbhkcfpjpydululquiwlmvuyynmnehfmevangczlbsvbqifmsgscsswhgmugsuuehpibcjnfpuiexxsbqkbidsmnbuijcrpcbzqjricgdirlzmzmjsjuvevigmmyezqtfvyqtbieveifyfemgscfllhrpzrinlcguwaxdnapbmulcrioqqpubmoymixwettitmtvrhquqpyrkyzpdhxmovfesrnmoylqwcqaarnarvcsqyejkjcqlfvtqvzoynhylydvazpdeyjsifpbsnsvgigvrjqhfjupxmyvvkipsptw",
//     271));
// console.log(code345("Euston saw I was not Sue."));
// console.log(code1([3, 3], 6));
