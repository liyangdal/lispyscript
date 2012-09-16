// Generated by LispyScript v0.2.4
var testTemplate = function(one,two,three) {
    return ["1",one,"2",two,"3",three].join('');
};
var lispyscript = function() {
    return (function() {
        return Array.prototype.slice.call(arguments);
    })(((true === (true === true)) ?
        ("Passed - " + "(true? true)") :
        ("Failed - " + "(true? true)")),((true === (false === false)) ?
        ("Passed - " + "(false? false)") :
        ("Failed - " + "(false? false)")),((true === (false === (true === {}))) ?
        ("Passed - " + "(false? (true? {}))") :
        ("Failed - " + "(false? (true? {}))")),((true === (!false)) ?
        ("Passed - " + "(! false)") :
        ("Failed - " + "(! false)")),((true === (typeof(undefined) === "undefined")) ?
        ("Passed - " + "(undefined? undefined)") :
        ("Failed - " + "(undefined? undefined)")),((true === (false === (typeof(null) === "undefined"))) ?
        ("Passed - " + "(false? (undefined? null))") :
        ("Failed - " + "(false? (undefined? null))")),((true === (null === null)) ?
        ("Passed - " + "(null? null)") :
        ("Failed - " + "(null? null)")),((true === (false === (undefined === null))) ?
        ("Passed - " + "(false? (null? undefined))") :
        ("Failed - " + "(false? (null? undefined))")),((true === (0 === 0)) ?
        ("Passed - " + "(zero? 0)") :
        ("Failed - " + "(zero? 0)")),((true === (false === (0 === ''))) ?
        ("Passed - " + "(false? (zero? ''))") :
        ("Failed - " + "(false? (zero? ''))")),((true === (typeof(true) === "boolean")) ?
        ("Passed - " + "(boolean? true)") :
        ("Failed - " + "(boolean? true)")),((true === (false === (typeof(0) === "boolean"))) ?
        ("Passed - " + "(false? (boolean? 0))") :
        ("Failed - " + "(false? (boolean? 0))")),((true === (Object.prototype.toString.call(1) === "[object Number]")) ?
        ("Passed - " + "(number? 1)") :
        ("Failed - " + "(number? 1)")),((true === (false === (Object.prototype.toString.call('') === "[object Number]"))) ?
        ("Passed - " + "(false? (number? ''))") :
        ("Failed - " + "(false? (number? ''))")),((true === (Object.prototype.toString.call('') === "[object String]")) ?
        ("Passed - " + "(string? '')") :
        ("Failed - " + "(string? '')")),((true === (Object.prototype.toString.call([]) === "[object Array]")) ?
        ("Passed - " + "(array? []])") :
        ("Failed - " + "(array? []])")),((true === (false === (Object.prototype.toString.call({}) === "[object Array]"))) ?
        ("Passed - " + "(false? (array? {}))") :
        ("Failed - " + "(false? (array? {}))")),((true === (function(obj) {
            return (obj === Object(obj));
        })({})) ?
        ("Passed - " + "(object? {})") :
        ("Failed - " + "(object? {})")),((true === (function(obj) {
            return (obj === Object(obj));
        })([])) ?
        ("Passed - " + "(object? [])") :
        ("Failed - " + "(object? [])")),((true === (false === (function(obj) {
            return (obj === Object(obj));
        })(null))) ?
        ("Passed - " + "(false? (object? null))") :
        ("Failed - " + "(false? (object? null))")),((true === (10 === (true ?
            (function() {
                var ret = 10;
                return ret;
            })() :
            undefined))) ?
        ("Passed - " + "when test") :
        ("Failed - " + "when test")),((true === (10 === ((!false) ?
            (function() {
                return (function() {
                    var ret = 10;
                    return ret;
                })();
            })() :
            undefined))) ?
        ("Passed - " + "unless test") :
        ("Failed - " + "unless test")),((true === (10 === (function() {
            var recur = null;
            var _result = !undefined;
            var _nextArgs = null;
            var _f = function(i) {
                return ((i === 10) ?
                    i :
                    recur(++i));
            };
            recur = function() {
                _nextArgs = arguments;
                return ((_result === undefined) ?
                    undefined :
                    (function() {
                        _result = undefined;
                        while(_result===undefined) _result=_f.apply(this,_nextArgs);
                        return _result;
                    })());
            };
            return recur(1);
        })())) ?
        ("Passed - " + "loop recur test") :
        ("Failed - " + "loop recur test")),((true === (10 === (function() {
            var ret = 0;
            (function(o,f,s) {
                if(o.forEach){o.forEach(f,s)}else{for(var i=0,l=o.length;i<l;++i)f.call(s||o,o[i],i,o)};
                return undefined;
            })((function() {
                return Array.prototype.slice.call(arguments);
            })(1,2,3,4),function(val,i,obj) {
                return ret = (ret + val);
            });
            return ret;
        })())) ?
        ("Passed - " + "each test") :
        ("Failed - " + "each test")),((true === (10 === (function() {
            var ret = 0;
            (function(o,f,s) {
                var k;if(Object.keys){k=Object.keys(o)}else{k=[];for(var i in o)k.push(i)};
                return (function(o,f,s) {
                    if(o.forEach){o.forEach(f,s)}else{for(var i=0,l=o.length;i<l;++i)f.call(s||o,o[i],i,o)};
                    return undefined;
                })(k,function(elem) {
                    return f.call(s,o[elem],elem,o);
                });
            })((function() {
                var r = {};
                for(var i=0,l=arguments.length;i<l;i+=2)r[arguments[i]]=arguments[i+1];;
                return r;
            })("a",1,"b",2,"c",3,"d",4),function(val,key,obj) {
                return ret = (ret + val);
            });
            return ret;
        })())) ?
        ("Passed - " + "eachKey test") :
        ("Failed - " + "eachKey test")),((true === (10 === (function(arr,f,init) {
            ((arguments.length < 3) ?
                init = arr.shift() :
                undefined);
            (function(o,f,s) {
                if(o.forEach){o.forEach(f,s)}else{for(var i=0,l=o.length;i<l;++i)f.call(s||o,o[i],i,o)};
                return undefined;
            })(arr,function(val,i,list) {
                return init = f(init,val,i,list);
            });
            return init;
        })((function() {
            return Array.prototype.slice.call(arguments);
        })(1,2,3,4),function(accum,val,i,list) {
            return (accum + val);
        },0))) ?
        ("Passed - " + "reduce test") :
        ("Failed - " + "reduce test")),((true === (20 === (function(arr,f,init) {
            ((arguments.length < 3) ?
                init = arr.shift() :
                undefined);
            (function(o,f,s) {
                if(o.forEach){o.forEach(f,s)}else{for(var i=0,l=o.length;i<l;++i)f.call(s||o,o[i],i,o)};
                return undefined;
            })(arr,function(val,i,list) {
                return init = f(init,val,i,list);
            });
            return init;
        })((function(arr,f,scope) {
            var result = [];
            (function(o,f,s) {
                if(o.forEach){o.forEach(f,s)}else{for(var i=0,l=o.length;i<l;++i)f.call(s||o,o[i],i,o)};
                return undefined;
            })(arr,function(val,i,list) {
                return result.push(f.call(scope,val,i,list));
            });
            return result;
        })((function() {
            return Array.prototype.slice.call(arguments);
        })(1,2,3,4),function(val,i,list) {
            return (val * 2);
        }),function(accum,val,i,list) {
            return (accum + val);
        },0))) ?
        ("Passed - " + "map test") :
        ("Failed - " + "map test")),((true === ("112233" === testTemplate(1,2,3))) ?
        ("Passed - " + "template test") :
        ("Failed - " + "template test")));
};
var browserTest = function() {
    var el = document.getElementById("testresult");
    return (el.outerHTML ?
        el.outerHTML = ["<pre>",(function(groupname) {
            var start = new Date();
            var tests = groupname();
            var passed = 0;
            var failed = 0;
            (function(o,f,s) {
                if(o.forEach){o.forEach(f,s)}else{for(var i=0,l=o.length;i<l;++i)f.call(s||o,o[i],i,o)};
                return undefined;
            })(groupname(),function(elem) {
                return (elem.match(/^Passed/) ?
                    ++passed :
                    ++failed);
            });
            return [["\n","LispyScript Testing","\n",start,"\n\n"].join(''),(function(arr,f,init) {
                ((arguments.length < 3) ?
                    init = arr.shift() :
                    undefined);
                (function(o,f,s) {
                    if(o.forEach){o.forEach(f,s)}else{for(var i=0,l=o.length;i<l;++i)f.call(s||o,o[i],i,o)};
                    return undefined;
                })(arr,function(val,i,list) {
                    return init = f(init,val,i,list);
                });
                return init;
            })(tests,function(memo,elem,index) {
                return (memo + [elem,"\n"].join(''));
            },""),"\nTotal tests ",tests.length,"\nPassed ",passed,"\nFailed ",failed,"\nDuration ",(new Date() - start),"ms\n"].join('');
        })(lispyscript),"</pre>"].join('') :
        el.innerHTML = (function(groupname) {
            var start = new Date();
            var tests = groupname();
            var passed = 0;
            var failed = 0;
            (function(o,f,s) {
                if(o.forEach){o.forEach(f,s)}else{for(var i=0,l=o.length;i<l;++i)f.call(s||o,o[i],i,o)};
                return undefined;
            })(groupname(),function(elem) {
                return (elem.match(/^Passed/) ?
                    ++passed :
                    ++failed);
            });
            return [["\n","LispyScript Testing","\n",start,"\n\n"].join(''),(function(arr,f,init) {
                ((arguments.length < 3) ?
                    init = arr.shift() :
                    undefined);
                (function(o,f,s) {
                    if(o.forEach){o.forEach(f,s)}else{for(var i=0,l=o.length;i<l;++i)f.call(s||o,o[i],i,o)};
                    return undefined;
                })(arr,function(val,i,list) {
                    return init = f(init,val,i,list);
                });
                return init;
            })(tests,function(memo,elem,index) {
                return (memo + [elem,"\n"].join(''));
            },""),"\nTotal tests ",tests.length,"\nPassed ",passed,"\nFailed ",failed,"\nDuration ",(new Date() - start),"ms\n"].join('');
        })(lispyscript));
};
((typeof(window) === "undefined") ?
    console.log((function(groupname) {
        var start = new Date();
        var tests = groupname();
        var passed = 0;
        var failed = 0;
        (function(o,f,s) {
            if(o.forEach){o.forEach(f,s)}else{for(var i=0,l=o.length;i<l;++i)f.call(s||o,o[i],i,o)};
            return undefined;
        })(groupname(),function(elem) {
            return (elem.match(/^Passed/) ?
                ++passed :
                ++failed);
        });
        return [["\n","LispyScript Testing","\n",start,"\n\n"].join(''),(function(arr,f,init) {
            ((arguments.length < 3) ?
                init = arr.shift() :
                undefined);
            (function(o,f,s) {
                if(o.forEach){o.forEach(f,s)}else{for(var i=0,l=o.length;i<l;++i)f.call(s||o,o[i],i,o)};
                return undefined;
            })(arr,function(val,i,list) {
                return init = f(init,val,i,list);
            });
            return init;
        })(tests,function(memo,elem,index) {
            return (memo + [elem,"\n"].join(''));
        },""),"\nTotal tests ",tests.length,"\nPassed ",passed,"\nFailed ",failed,"\nDuration ",(new Date() - start),"ms\n"].join('');
    })(lispyscript)) :
    window.onload = browserTest);
