
var AppDispatcher = new Flux.Dispatcher();

var UserStore = {
    fields: {},
    getField: function (name, dftVal) {
        return name in this.fields ? this.fields[name] : dftVal;
    },
    setField: function (name, val) {
        this.fields[name] = val;
    },
    clear: function () {
        var self = this;
        $.each(this.fields, function (key, val) {
            self.fields[key] = null;
            delete self.fields[key];
        });
   },
    save: function (login, params) {
        if (login !== undefined) {
            var urlParams = "";
            if (params !== undefined && params !== null) {
                $.each(params, function (key, val) {
                    urlParams += "&" + key + "=" + encodeURI(val).replace(/'/g, "%27");
                });
            }
            $.ajax({
                url: "save-parameters",
                type: 'post',
                data: "login=" + login + urlParams,
                async: true,
                success: function (data, status) {
                    UserStore.trigger('save-succeded');
                },
                error: function (data, status, error) {
                    UserStore.trigger('save-failed');
                }
            });
        } else {
            UserStore.trigger('save-failed');
        }
    }

};

MicroEvent.mixin(UserStore);

var FormStore = {
    fields: [],
    findByName: function (name) {
        var result = [];
        for (var i = 0; i < this.fields.length; i++) {
            if (this.fields[i].name === name) {
                result.push(this.fields[i]);
            }
        }
        return result;
    },
    findByGroup: function (group) {
        var result = [];
        for (var i = 0; i < this.fields.length; i++) {
            if (this.fields[i].group === group) {
                result.push(this.fields[i]);
            }
        }
        return result;
    },
    findByGroupName: function (group, name) {
        for (var i = 0; i < this.fields.length; i++) {
            if (this.fields[i].group === group && this.fields[i].name === name) {
                return this.fields[i];
            }
        }
        return null;
    },
    getField: function (group, name, dftVal) {
        var field = this.findByGroupName(group, name);         
        return field !== undefined && field !== null ? field.value : dftVal;
    },
    setField: function (group, name, val) {
        var field = this.findByGroupName(group, name);    
        if(field !== undefined && field !== null) {
            field.value = val;
        } else {            
            this.fields.push({group: group, name: name, value: val});
        }
    },
    clear: function (group) {      
        var fields = this.findByGroup(group); 
        for(var i=0; i<fields.length; i++) {            
            var index = this.fields.indexOf(fields[i]);
            if(index > -1) {
                this.fields.splice(index, 1);
            }
        }
    }

};

MicroEvent.mixin(FormStore);

var FormActions = {
    changeField: function (group, name, value) {
        AppDispatcher.dispatch({
            eventName: 'field-changed',
            eventItem: {group: group, name: name, value: value}
        });
    },
    submitForm: function () {
        AppDispatcher.dispatch({
            eventName: 'form-submitted',
            eventItem: {}
        });
    },
    saveForm: function () {
        AppDispatcher.dispatch({
            eventName: 'form-saved',
            eventItem: {}
        });
    },
    cancelForm: function () {
        AppDispatcher.dispatch({
            eventName: 'form-cancelled',
            eventItem: {}
        });
    },
};

AppDispatcher.register(function (obj) {

    switch (obj.eventName) {

        case 'field-changed':
            FormStore.setField(obj.eventItem.group, obj.eventItem.name, obj.eventItem.value);
            FormStore.trigger('fieldChanged');
            break;

        case 'form-submitted':
            FormStore.trigger('formSubmitted');
            break;

        case 'form-saved':
            FormStore.trigger('formSaved');
            break;

        case 'form-cancelled':
            FormStore.trigger('formCancelled');
            break;
    }

    return true;

});