class Language{constructor(t,s,e,h){this.language=t,this.months=s,this.monthsAbbr=e,this.days=h,this.rtl=!1,this.ymd=!1}get language(){return this._language}set language(t){if("string"!=typeof t)throw new TypeError("Language must be a string");this._language=t}get months(){return this._months}set months(t){if(12!==t.length)throw new RangeError(`There must be 12 months for ${this.language} language`);this._months=t}get monthsAbbr(){return this._monthsAbbr}set monthsAbbr(t){if(12!==t.length)throw new RangeError(`There must be 12 abbreviated months for ${this.language} language`);this._monthsAbbr=t}get days(){return this._days}set days(t){if(7!==t.length)throw new RangeError(`There must be 7 days for ${this.language} language`);this._days=t}toJSON(){return{language:this.language,months:this.months,monthsAbbr:this.monthsAbbr,days:this.days,rtl:this.rtl,ymd:this.ymd}}}var zh=new Language("Chinese",["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],["日","一","二","三","四","五","六"]);export default zh;
