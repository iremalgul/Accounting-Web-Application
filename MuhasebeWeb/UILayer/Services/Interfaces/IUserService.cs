using DtoLayer.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UILayer.Services.Interfaces
{
    public interface IUserService
    {
        List<UserDto> GetAll();
        UserDto GetById(int id);
        bool Create(UserDto user);
        bool Update(UserDto user);
        bool Delete(int id);
        UserDto Login(string username, string password);
    }
}
