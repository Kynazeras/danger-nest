import { message, danger } from 'danger';

const modifiedMD = danger.git.modified_files.join('- ');
message('Changed Fies in this PR: \n - ' + modifiedMD);
