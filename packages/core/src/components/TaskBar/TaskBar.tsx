import * as React from 'react'
import { TaskBar as BaseTaskBar, List } from '@react95/core';

export const TaskBar = () => {
  return (
    <BaseTaskBar
        list={
          <List>
            <List.Item icon="folder_exe2_32x32_4bit">
              <List>
                <List.Item icon="folder_exe_32x32_4bit">Accessories</List.Item>
                <List.Item icon="folder_exe_32x32_4bit">StartUp</List.Item>
                <List.Item icon="microsoft_exchange_32x32_4bit">
                  Microsoft Exchange
                </List.Item>
                <List.Item icon="ms_dos_32x32_32bit">MS-DOS Prompt</List.Item>
                <List.Item icon="microsoft_network_32x32_4bit">
                  The Microsoft Network
                </List.Item>
                <List.Item icon="windows_explorer_32x32_4bit">
                  Windows Explorer
                </List.Item>
              </List>
              Programs
            </List.Item>

            <List.Item icon="folder_file_32x32_4bit">Documents</List.Item>

            <List.Item icon="settings_32x32_4bit">
              <List>
                <List.Item icon="folder_settings_32x32_4bit">
                  Control Panel
                </List.Item>
                <List.Item icon="folder_print_32x32_4bit">Printers</List.Item>
              </List>
              Settings
            </List.Item>

            <List.Item icon="file_find_32x32_4bit">Find</List.Item>
            <List.Item icon="help_book_32x32_4bit">Help</List.Item>
            <List.Item icon="loader_bat_32x32_4bit">Run...</List.Item>

            <List.Divider />

            <List.Item icon="computer_3_32x32_4bit">Shut Down...</List.Item>
          </List>
        }
      />
  )
}
