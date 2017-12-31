
import * as service from './../../../common/constants/service';

export default class SearchStore {
    static searchPanGuWord(keyword) {
        return service.searchPanGuWord(keyword).then((res) => {
            return res;
        });
    }
}